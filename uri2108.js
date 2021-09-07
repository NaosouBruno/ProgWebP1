var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let maior = "";
let maiorTam = -1;
let line = lines.shift();
while(line != "0"){
    let tamanhos = line.split(" ").map((w)=>{
        if(maiorTam <= w.length){
            maior = w;
            maiorTam = w.length;
        }
        return w.length;
    });
    console.log(tamanhos.join("-"));
   
    let line = lines.shift();
}
console.log(`\nThe biggest word:  ${maior}`);
