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
    handler: function(argv) {
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
    handler: function() {
        console.log(chalk.red('Note removed successfully'));
    }
});

yargs.command({
    command: 'LIST', 
    describe: 'List notes',
    handler: function() {

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
    handler: function() {
        console.log(chalk.white('Reading you a note'));
    }
});

yargs.parse();