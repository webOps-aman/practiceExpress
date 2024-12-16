const express = require('express');
const app = express();
const port = 4022;

app.get('/', (req, res) =>{
    res.status(200).send('Welcome, Home Page');
});

app.get('/about', (req, res) =>{
    res.status(200).send('Welcome, About Page.');
});

app.get('/contact', (req, res) =>{
    res.status(200).send('Welcome, Contact Page');
});

// 404 Error Handling Middleware
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

app.listen(port, () => {
    console.log(`Server Listening To The Port ${port}`);
});