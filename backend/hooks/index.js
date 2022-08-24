const notesHooks = require('./notesHooks');

function Hooks(up) {
  return {
    notesHooks: notesHooks(up),
  };
}

module.exports = Hooks;