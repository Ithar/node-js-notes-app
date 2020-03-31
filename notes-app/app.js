const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');

yargs.version('1.1.0');

yargs.command({
    command: 'ADD', 
    describe: 'Add a new note',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'Note title'
        }, 
        body: {
            type: 'string',
            demandOption: true,
            describe: 'Note body'
        }        
    },
    handler(argv) {
        const success = notes.addNote(argv.title, argv.body)
        if (success) {
            console.log(chalk.green('New note added successfully'));
        } else {
            console.log(chalk.gray('Failed to add note title "' + argv.title +'"  already exists'));
        }
    }
});

yargs.command({
    command: 'REMOVE', 
    describe: 'Remnoves a note based on id or title',
    builder: {
        id: {
            type: 'integer',
            describe: 'Note id'
        }, 
        title: {
            type: 'string',
            describe: 'The note title'
        }        
    },
    handler(argv) {
        notes.removeNote(argv.id, argv.title);
        console.log(chalk.red('Note removed successfully'));
    }
});

yargs.command({
    command: 'LIST', 
    describe: 'List notes',
    handler() {

        const myNotes = notes.getNotes();

        console.log(chalk.blue('Your notes ('+myNotes.length+') ...'));
        
        var i = 1;
        myNotes.forEach(note => {
            console.log(chalk.blue(i + ':\t' +note.title)); 
            i++
        });
    }
});

yargs.command({
    command: 'READ', 
    describe: 'Reading notes',
    handler(argv) {
        console.log(chalk.brown('Reading you a note'));
        notes.readNote(argv.id, argv.title);
    }
});

yargs.parse();