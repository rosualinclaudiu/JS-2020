//functioneaza pentru ca x este "hoisted"
x = 10
// eroare pentru ca y nu este "hoisted"
//y = 20

console.log(x)
// eroare pentru ca z nu ste "hoisted"
// console.log(z)

test()

// eroare deoarece clasa Hello nu e "hoisted"
var w = new Hello()

// declaratia variabilei e mutata la inceput (hoisted)
var x
let y
const z = 3

function test() {
    console.log("test")
}

class Hello