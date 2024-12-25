require("dotenv").config();

const express = require('express');
const cors = require("cors");
const app = express();
const port = 4022;
const authRoute = require('./router/auth-router');
const contactRoute = require("./router/contact-router");
const connectdb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATH, HEAD",
    credentials: true
}


app.use(cors(corsOptions));


app.use(express.json());
app.use('/api/auth', authRoute);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);

connectdb().then(() => {
    app.listen(port, () => {
        console.log(`Server Listening To The Port ${port}`);
    });
});
