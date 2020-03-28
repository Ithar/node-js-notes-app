const chalk = require('chalk');
const fs = require('fs');

const notesFile = 'notes.json';

const notes = {

  getNotes : function() {
    const notes = loadNotes();
    return notes;
  }, 
  addNote : function(title, body) {

    const notes = loadNotes();

    let dupTitle = false; 
    notes.forEach(note => { 
      if (note.title === title) {
        dupTitle = true;
      }  
    });

    if (!dupTitle) {
      notes.push(createNote(title, body));
      saveNotes(notes);
      return true;
    } 

    return false;
  }

}

const createNote = function(title, body) {
    const note = {
      title : title,
      body: body
  };

  return note;
}

const loadNotes = function() {
  try {
    return JSON.parse(fs.readFileSync(notesFile).toString());
  } catch(e) {
    console.log(chalk.red.bold('Error ' +e.message));
    return [];
  }  
}

const saveNotes = function(notes) {
  fs.writeFileSync(notesFile, JSON.stringify(notes));
}

module.exports = notes;
