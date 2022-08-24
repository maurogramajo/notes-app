const url = 'http://localhost:3001/notes';

export const sendGetNote = () => {
  fetch(url, {
    method: 'GET',
    // headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ title, content, categoryId: selectedCategory._id }),
  }).then((res) => res.json()).then(() => refreshNotes());
};

export const sendCreateNote = () => {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, categoryId: selectedCategory._id }),
  }).then((res) => res.json()).then(() => refreshNotes());
};