
const phone = /\+?4?0\d{9}/

let text = `
Hello, my phone is 0741971919
`

let masked = text.replace(phone, '*****')

console.log(masked)