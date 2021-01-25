// a este variabila globala
var a = 10;

function multiply(a) {
    // a este variabila locala
    a *= 2  // a = a * 2
    console.log(a) // se va face inmultirea, pentru ca se poate face modificarea valorii lui a
}


multiply(a)

console.log(a) // nu se va face inmultirea, pentru ca nu se poate modifica valoare globala (initiala)