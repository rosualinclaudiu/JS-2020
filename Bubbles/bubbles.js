var numberOfBubbles = 40
for (let i = 0; i < numberOfBubbles; i++) {
    newBubble()
}
function newBubble() {
    let bubble = document.createElement("div")
    bubble.classList.add("bubble")
    let x = randomNumber(100)
    let delay = randomNumber(3000)
    let red = randomNumber(255)
    let green = randomNumber(255)
    let blue = randomNumber(255)
    let size = randomNumber(3) + 1

    // bubble.style.left = x + "vw"  (la fel ca cea de dedesubt)
    bubble.style.left = `${x}vw`
    // bubble.style.animationDelay = delay + "ms"  (la fel ca cea de dedesubt)
    bubble.style.animationDelay = `${delay}`
    // bubble.style.borderColor = "rgb(" + red + "," + green + "," + blue + ")"    (la fel ca ea de dedesubt)
    bubble.style.borderColor = `rgb(${red},${green},${blue})`
    bubble.style.height = bubble.style.width = `${size}em`
    // bubble.style.height = `${size}em`
    // bubble.style.width = `${size}em`
    document.querySelector("body").appendChild(bubble)
}
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

