var fs = require('fs');
import ident from 'ident';
import command from 'command';
import ops from 'ops';

var fileContent = "";
function fileAdd(content){
  fileContent += content;
}

let seqComandos = [1,2,2,1,2,5,1,2,4]
let seqDados = []
let currComm = 0;
let prevComm = 0;





for (let index = 0; index < seqComandos.length; index++) {
    const currComm = seqComandos[index];
    if (prevComm !== 1)
    {
      prevComm = commands[currComm]();
      continue
    }
    fileContent += (currComm)
    seqDados.push(currComm);
    prevComm = 0
}


fs.appendFile('mynewfile1.js', fileContent, function (err) {
  if (err) throw err;
  console.log('Compiled!');
});

