document.querySelector('div')
        .addEventListener("click", () => document.querySelector('div').classList.add("disappear")
        ) //  pentru o singura functie, poate fi scrisa in felul asta. Daca sunt mai multe, le scriem ca mai jos

        document.querySelector('div')
        .addEventListener("animationend", function() {
            document.querySelector("div").classList.remove("disappear")
        })