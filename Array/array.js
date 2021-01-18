let bubbles = [60, 59, 48, 71, 45, 51, 65, 70, 49, 38]

let fruits = ["portocale", "mango", "banane", "ananas", "rosii"]

bubbles.sort()
max = bubbles.pop()

fruits.sort()
fruits.reverse()

console.log(max)
console.log(fruits)

for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
} // for loop

for (const fruit of fruits) {
    listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
} // for of

fruits.forEach(fruit => {
    listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem)
}) // for each

for (const fruit in fruits) {
    listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector("ul").appendChild(listItem) 
    // for in
}