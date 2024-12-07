const express = require('express');
const app = express();
const path = require('path');

// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "./public");
// build in middleware
app.use(express.static(staticPath));


app.get('/', (req, res) => {
    res.write('<h1>hello, home page from htmlcssfiles</h1>');
    res.send();
});

app.get('/about', (req, res) => {
    res.send('hello, about page from htmlcssfiles');
});

app.get('/contact', (req, res) => {
    res.send('hello, contact page from htmlcssfiles');
});

app.listen(8000, () => {
    console.log('Listening to the port on 8000');
})