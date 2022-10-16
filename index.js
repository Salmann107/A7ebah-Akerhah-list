const express = require('express')
const app = express()
const PORT = 3000

//MIDDELWARE
app.set('view engine','ejs')

//ROUTS

app.listen(PORT, () => {
    console.log('You are running the app')
})