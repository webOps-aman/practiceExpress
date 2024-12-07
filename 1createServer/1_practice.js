const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello, home');
});

app.get('/contact', (req, res) => {
    res.send('hello, contact section');
});

app.listen(4022, () => {
    console.log('Listening the port at 4022');
});