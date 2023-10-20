var fs = require('fs');

var fileContent = "";
function fileAdd(content){
  fileContent += content;
}

const indenter = {
  "tab" : function tab(){
    fileAdd("\t")
  },
  "endl" : function endl(){
    fileAdd(";\n")
  },
  "endfunc" : function endfunc(){
    fileAdd(")")
  },
}

// Retorna 0 : Novo Comando
// Retorna 1 : Pega Valor Cru e Termina
// Retorna 2 : Pega Valor Cru e fica aberto
let varCount = 0;
let onString = false;
const command = {
    0 : function endCommand() {
      indenter["endl"]();
      return 0
    },
    1 : function createVar(){
      fileAdd("var ")
      return 0
    },
    2 : function identifyVar(){
      fileAdd(`nome${varCount} = (`)
      varCount++
      return 2
    },
  
    3 : function print() {
      fileAdd('console.log( ')
      return 2
    },
    4 : function soma(){
      fileAdd("+ ")
      return 2
    },
    5 : function subtracao(){
      fileAdd("- ")
      return 2
    },
    6 : function multiplicacao(){
      fileAdd("* ")
      return 2
    },
    7 : function divisao(){
      fileAdd("/ ")
      return 2
    },
    8 : function soma(){
      fileAdd(" + ")
      return 2
    },
}

let seqComandos = [1,2,1,4,1,4,1,0,1,2,1,4,1,0]
let seqDados = [49,50]
let currComm = 0;
let prevComm = 0;
let onFunc = false;

for (let index = 0; index < seqComandos.length; index++) {
    currComm = seqComandos[index];
    //console.log(currComm);
  
    if (prevComm == 0)
    {
      if (onFunc && currComm == 0)
      {
        indenter["endfunc"]();
        onFunc = false;
      }

      if (onFunc && onString)
      {
        String.fromCharCode(seqDados[currComm - 1])
        
      }
      prevComm = command[currComm]();
      continue
    }
    if (prevComm == 1)
    {
      fileContent += seqDados[currComm]
      prevComm = 0;
      continue
    }
    if (prevComm == 2)
    {
      onFunc = true;
      if (currComm == 0)
      {
        indenter["endfunc"]();
        indenter["endl"]();
        prevComm = 0;
        continue
      }
      else
      {
        fileContent += String.fromCharCode(seqDados[currComm - 1])
        prevComm = 0;
        continue
      }
    }
    
    prevComm = 0
}


fs.appendFile('mynewfile1.js', fileContent, function (err) {
  if (err) throw err;
  console.log('Compiled!');
});

