const express = require('express')
const cors = require('cors')
const port = 5000
const app = express()
const data = require('./data/data.json')

app.use(cors());

app.get('/courses', (req, res) =>{
    res.send(data)
})

app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    const catData = data.find(i => i.id === id);
    res.send(catData);
})

app.listen(port, () => {
    console.log('port getting');
})