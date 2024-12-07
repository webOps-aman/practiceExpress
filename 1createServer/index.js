// const express = require('express');
// const app = express();

// //create server
// app.get('/', (req, res) => {
//     res.send('hello, server');
// })

// // listen or run the server on port
// app.listen(8000, () => {
//     console.log('Listening the port at 8000');
// })
// _____________



const express = require('express');
const app = express();

//create server
app.get('/', (req, res) => {
    res.send('hello, Home Section');
});

app.get('/about', (req, res) => {
    res.send('hello, About Section');
});

// listen or run the server on port
app.listen(8000, () => {
    console.log('Listening the port at 8000');
})