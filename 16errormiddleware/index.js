require("dotenv").config();

const express = require('express');
const app = express();
const port = 4022;
const router = require('./router/auth-router');
const connectdb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());
app.use('/api/auth', router);
app.use(errorMiddleware);

connectdb().then(() => {
    app.listen(port, () => {
        console.log(`Server Listening To The Port ${port}`);
    });
});
