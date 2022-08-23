const http = require('http');
const mongo = require('vg-mongo');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let db = null;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

app.use(express.static('public/build'));

app.get('/notes', async (req, res) => {
  const notes = await db.notes.asyncFind({ archived: false });
  res.json(notes);
});

app.post('/notes', async (req, res) => {
  const {
    title,
    content,
    categoryId,
  } = req.body;
  
  const inserted = await db.notes.asyncInsert({
    title,
    content,
    categoryId,
    archived: false,
    edited: new Date().toISOString()
  });
  res.json(inserted);
});

app.patch('/notes', async (req, res) => {
  const {
    _id,
    title,
    content,
    categoryId,
  } = req.body;

  const updated = await db.notes.asyncUpdate(
    { _id: mongo.ObjectID(_id) },
    {
      $set: {
      title: title,
      content: content,
      categoryId: categoryId,
      edited: new Date().toISOString()
      }
    }
  );
  res.json(updated);
});

app.delete('/notes', async (req, res) => {
  const {
    _id,
  } = req.body;
  
  const deleted = await db.notes.asyncRemove({ _id: mongo.ObjectID(_id) });
  res.json(deleted);
});

app.get('/notes/archived', async (req, res) => {
  const notes = await db.notes.asyncFind({ archived: true });
  res.json(notes);
});

app.patch('/notes/archived', async (req, res) => {
  const {
    _id,
    archived
  } = req.body;
  
  const toArchive = await db.notes.asyncUpdate(
    { _id: mongo.ObjectID(_id) },
    { $set: { archived: !archived } }
  );
  res.json(toArchive);
});

app.get('/categories', async (req, res) => {
  const categories = await db.categories.asyncFind();
  res.json(categories);
});

app.post('/categories', async (req, res) => {
  const {
    tag,
  } = req.body;
  
  const inserted = await db.categories.asyncInsert({ tag });
  res.json(inserted);
});

const url = 'mongodb://127.0.0.1:27017';
async function init() {
  db = await mongo(url, 'notesdb');
  const server = http.createServer(app);
  server.listen(3001, () => console.info('ready'));
}

init();