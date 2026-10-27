module.exports = {
    ire,
    numeri
};


function ire(nome) {
    console.log("romanii ad domum ite, " + nome);
}

function numeri(num) {
    if (num>0) {
        console.log(num + " est maior quam nihil");
    } else if (num<0) {
        console.log(num + " est minor quam nihil");
    } else if (num === undefined) {
        console.log(num + " est indefinitum");
    } else {
        console.log(num + " est nihil");
    }
}