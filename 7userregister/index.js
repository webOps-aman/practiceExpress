const express = require('express');
const app = express();
const port = 4022;
const router = require('./router/auth-router');

app.use(express.json());
app.use('/api/auth', router);

app.listen(port, () => {
    console.log(`Server Listening To The Port ${port}`);
});