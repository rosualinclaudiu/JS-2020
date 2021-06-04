const express = require('express')
const app = express()
const port = 80

function random(min, max) {
    console.log(`min = ${min}, max = ${max}`)
    return {
        number: Math.random() * (max - min) + min
        //number: Math.floor(Math.random() * (+max + 1 -+ min) + + min) // - este legata cu cea de mai jos
    }
}

//  /random?min={x}$max={y}
app.get('/random', (req, resp) => { 
    resp.send(random(parseInt(req.query.min), parseInt(req.query.max)))
    //resp.send(random(req.query.min, req.query.max)) // - este legata cu cea de mai sus
})

app.listen(
    port,
    () => { console.log('Listening on http://localhost:${port}') }
)