const express = require('express');
const app = express();
const port = 4022;
const router = require('./router/auth-router');
const connectdb = require("./utils/db");

app.use(express.json());
app.use('/api/auth', router);

connectdb().then(() => {
    app.listen(port, () => {
        console.log(`Server Listening To The Port ${port}`);
    });
});
