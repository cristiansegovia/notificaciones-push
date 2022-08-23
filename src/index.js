require("dotenv").config();

const express = require("express");
const morgan = require('morgan');
const path = require("path");

const app = express()

console.log("ingresando a app")
const PORT= process.env.PORT || 3000

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes
app.use(require('./routes/index'))

// Static Content
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, function(){
	console.log('Server Listening port...',PORT)
})

