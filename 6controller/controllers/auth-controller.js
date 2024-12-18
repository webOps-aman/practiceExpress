const home = async (req, res) => {
    try {
        res.status(200).send('Welcome, Home Page from auth-controller controller');
    } catch (error) {
        console.log(error);
    }
};

const about = async (req, res) => {
    try {
        res.status(200).send('Welcome, About Page from auth-controller controller');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {home, about};