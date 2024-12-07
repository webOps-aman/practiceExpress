// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('hello, home page from routing topic');
// });

// app.get('/about', (req, res) => {
//     res.send('hello, about page from routing topic');
// });

// app.get('/contact', (req, res) => {
//     res.send('hello, contact page from routing topic');
// });

// app.get('/temp', (req, res) => {
//     res.send('hello, temp page from routing topic');
// })

// app.listen(5000, () => {
//     console.log('Listening to the port on 5000');
// })
// _______________



const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello, home page from routing topic');
});

app.get('/about', (req, res) => {
    res.status(200).send('hello, about page from routing topic');
});

app.get('/contact', (req, res) => {
    res.send('hello, contact page from routing topic');
});

app.get('/temp', (req, res) => {
    res.send('hello, temp page from routing topic');
})

app.listen(5000, () => {
    console.log('Listening to the port on 5000');
})