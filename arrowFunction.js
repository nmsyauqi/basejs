function saludar(nome) {
    console.log("Hola, " + nome);
}; 

var salvatore = nome =>
    console.log("Salve, " + nome);
;
saludar("Helenus");
salvatore("Romanus");


var profile = (nomen, aetatis) => nomen + " est " + aetatis + " annos natus";
console.log(profile("Marcus", 25));
