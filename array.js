const nome = [
    'romanus',
    'helenus',
    'persa',
    'aegyptus'
]
console.log("//console.log('sum' + ' ' + nome.length);");
console.log('sum' + ' ' + nome.length);

var nomen = 'romanus';
var est = nome.includes(nomen);

if (!est) {
    console.log('nomen paratus est');
} else {
    console.log('nomen paratus non est');
}

console.log("//console.log(nome[2]);");
console.log(nome[3]);
if (nome[3] === undefined) {
    console.log('nomen non est');
} else if (nome[3] === 'aegyptus') 
    {
    console.log('nomen est in nomine');
} else {
    console.log('nomen non est in nomine');
}