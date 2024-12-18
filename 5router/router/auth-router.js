const express = require('express');
const router = express.Router();

// router.get('/', (req, res) =>{
//     res.status(200).send('Welcome, Home Page from auth-router router');
// });

router.route("/").get((req, res) =>{
    res.status(200).send('Welcome, Home Page from auth-router router');
});

module.exports = router;