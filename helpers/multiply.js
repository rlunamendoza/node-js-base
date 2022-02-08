const fs = require('fs');
const colors = require('colors');

const createFile = async (base, listar = false, hasta = 10) => {
    try {

        let salida = '';
        let consola = '';
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index} \n`;
            consola += `${colors.magenta(base)} ${colors.yellow('x')} ${colors.blue(index)} = ${colors.random((base * index).toString())} \n`;
        }
        if (listar) {
            console.log(colors.green('======================='));
            console.log(colors.america(`      Tabla del ${base}`))
            console.log(colors.green('======================='));
            console.log(consola); 
        }
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err
    }
}

module.exports = {
    createFile,
};