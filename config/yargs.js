const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar',
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla de multiplicar',
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Este es el numero hasta donde va la tabla',
                })
                .check((arg, options) => {
                    if (isNaN(arg.b)) {
                        throw 'La base tiene que ser un numero';
                    }
                    if (isNaN(arg.h)) {
                        throw 'Deberia ser un numero agregado en hasta';
                    }
                    return true;
                })
                .argv;

module.exports = argv;