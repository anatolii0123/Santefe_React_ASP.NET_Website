'use strict'
const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const server = require('http').Server(app)

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors());
app.use(express.static(path.resolve('frontend/build')))

app.use('/*', (req, res) => {
	res.sendFile(path.resolve('frontend/build/index.html'))
})

server.listen(PORT, () => {
	console.log("Connected to port:" + PORT);
})