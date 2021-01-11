let button = document.getElementById("check")
button.addEventListener("click", function () {
    let planet = document.getElementById("redplanet")

    planet.innerText = "Alien Invasion"
    planet.classList.add("alert")
    // planet.style.color = "red" - astea 2 mutate in CSS
    // planet.style.fontWeight = "bold"
    // planet.remove() - sterge partea asta din element, in acest caz - redplanet
})

document.getElementById("reset")
    .addEventListener("click", function () {
        let planet = document.getElementById("redplanet")

        planet.innerText = "Nothing to report"
        planet.classList.remove("alert")
    })

document.getElementById("greenplanet")
    .addEventListener("click", function () {
        document.getElementById("greenplanet").classList.add("alert")
    })