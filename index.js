// #variabels
// .strings
    var nome = "Romanus";
    var salus = "Salve";
    
function salutatio() {
    // console.log("//console.log(salus, nome);");
    console.log(salus, nome);
}

// .numbers
    var i = 1;
    var v = i * 5;
    var x = v * 2;

function numeri() {
    // console.log("//console.log(i, v, x);");
    // console.log("//console.log(i+v, v-i, v*x, x/v);");
    console.log(i, v, x);
    console.log(i+v, v-i, v*x, x/v);
}


// .boolean
var domi = true;
// var verum = true
// var falsum = false

// #conditional statements
// console.log("//if (typeof domi !== 'boolean') { console.log('Nihil est'); } else { if (domi === true) { console.log('Domi est') } else { console.log('Domi non est') } }");

function domis(){
    if (typeof domi !== "boolean") {
        console.log("Nihil est");
    } else if (domi === true) {
        console.log("Domi est")
    } else {
        console.log("Domi non est")
    }
}

// #comparison operators
// console.log("//if (i === 1) { console.log(i + ' unum est'); } else if (i > 1) { console.log(i + ' maior quam unum est'); } else { console.log(i + ' minor quam unum est'); }");

function compare(){
    if (i === 1) {
        console.log(i + " unum est");
    } else if (i > 1) {
        console.log(i + " maior quam unum est");
    } else {
        console.log(i + " minor quam unum est");
    }
};


// functions
module.exports = {
    // compare();
    salutatio,
    numeri,
    compare,
    domis
    
};
