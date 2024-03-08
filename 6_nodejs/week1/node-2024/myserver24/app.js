//const express = require('express')
import express from 'express'
import { meals } from './meals.js';

const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Class!')
})
app.get('/meals', (req, res) => {
    const randomItem = meals[Math.floor(Math.random()* meals.length)];
    res.send(randomItem);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})