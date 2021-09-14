var input = require('fs').readFileSync('stdin', 'utf8');
//var linhas = input.toUpperCase().split(" ")

function titleize(text) {
    var input = text.toLowerCase().split("");
    console.log("Conversao: ", input)
    for (var a = 0; a < input.length; a++) {
        if(a % 2 == 0){
            var w = input[a];
            input[a] = w[0].toUpperCase() + w.slice(1);
        }
        else{
            var w = input[a];
            input[a] = w[0].toLowerCase() + w.slice(1);
        }
        
    }
    return input.join(" ");
    
}
titleize(input)
console.log("Funcao: ", titleize(input) )
