function notesHooks(up) {
  const {
    services,
  } = up;

  up.addHook('/notes', 'afterSearch', async (req, searchResults, up) => {
    return searchResults.docs;
  });

  up.addHook('/notes', 'beforeInsert', async (req, dataDocument) => {
    dataDocument.archived = false;
    return dataDocument;
  });
}

module.exports = notesHooks;