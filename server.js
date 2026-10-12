const http = require('http')
const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require("node:path");

const port = process.env.PORT || 3000

const server = http.createServer(app)

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/styles/style.css'))
})

app.get('/night_sky.gif', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/night_sky.gif'))
})

app.get('/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/scripts/index.js'))
})

app.get('/page_2-bg.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/page_2-bg.png'))
})

app.get('/shooting-stars.svg', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/shooting-stars.svg'))
})

app.get('/page_2-moon.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/page_2-moon.png'))
})

app.get('/letter_bg.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/letter_bg.png'))
})

app.get('/letter.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/letter.png'))
})

app.get('/ty-soumya.svg', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/ty-soumya.svg'))
})
