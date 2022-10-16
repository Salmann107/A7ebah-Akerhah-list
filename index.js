const express = require('express')
const app = express()
const PORT = 3000
const ejslayouts = require('express-ejs-layouts')
//MIDDELWARE
app.set('view engine','ejs')
app.use(ejslayouts)

//ROUTS
//home
app.get('/', (req, res) => {
    res.render('home.ejs')
})
//favourite animals
app.get('/animals', (req,res) => {
    res.render('animals.ejs', {animals: ['sand crab', 'corny joke', 'bendicat the sea cucumber']
})
})

app.listen(PORT, () => {
    console.log('You are running the app')
})