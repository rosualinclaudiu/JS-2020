let startButton = document.querySelector("input[type='button']")

startButton.addEventListener("click", startGame)

function startGame() {
    // ascunde butonul
    startButton.classList.add("hidden")
}

function randomNumber(max) {
    // genereaza numar aleatoriu intre 0 si max
    return Math.round(Math.random() * (max + 1))
}

function randomLetter() {
    // generare cod ascii aleatoriu intre 65 si 90
    let randomCode = 65 + randomNumber(25)
    // convertim codul ascii in caracterul asociat lui
    return String.fromCharCode(randomCode)
}