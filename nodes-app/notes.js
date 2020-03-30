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
  }, 
  removeNote : function(id, title) {

    const notes = loadNotes();

    if (id !== undefined) {
      deleteById(id, notes);
    } else if (title !== undefined) {
      deleteByTitle(title, notes);
    }
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

const deleteById = function(id, notes) {

  const deletePostition = id -1;

  const deleted = false;
  for (var i = 0; i < notes.length; i++) {
      if (i === deletePostition) {
        notes.splice(i,1);
        deleted = true;
        break;
      }
  }
  
  if (!deleted) {
    console.log(chalk.gray('Cannot delete a note with id:' +id));  
  }

  saveNotes(notes);
}

const deleteByTitle = function(title, notes) {

  const deleted = false;
  for (var i = 0; i < notes.length; i++) {
    if (notes[i].title === title) {
      notes.splice(i,1);
      break;
    }
  }
 
  if (!deleted) {
    console.log(chalk.gray('Cannot delete a note with title:' +title));  
  }

  saveNotes(notes);
}

module.exports = notes;
