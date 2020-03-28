const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');
const getNotes = require('./notes.js');

yargs.version('1.1.0');

yargs.command({
    command: 'ADD', 
    describe: 'Add a new note',
    handler: function() {
        console.log(chalk.green('New note added successfully'));
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
        console.log(chalk.blue(getNotes()));
        
    }
});

yargs.command({
    command: 'READ', 
    describe: 'Reading notes',
    handler: function() {
        console.log(chalk.white('Reading your notes'));
    }
});


console.log(yargs.argv);

// const command = yargs.argv[1];
// const title = yargs.argv.title;
// const body = yargs.argv.body;

// console.log('COMMAND:' + command + '\n[title='+title+', body='+body+']');

// if (command === 'ADD') {
//     console.log(chalk.green('Add note'));
// } else if (command === 'REMOVE') {
//     console.log(chalk.red('Deleting a note'));
// }

