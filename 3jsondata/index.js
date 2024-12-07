// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>hello, home page from jsonData(topic)</h1>');
// });

// app.get('/about', (req, res) => {
//     res.send('hello, about page from jsonData(topic)');
// });

// app.get('/contact', (req, res) => {
//     res.send('hello, contact page from jsonData(topic)');
// });

// app.get('/temp', (req, res) => {
//     res.send('hello, temp page from jsonData(topic)');
// })

// app.listen(5000, () => {
//     console.log('Listening to the port on 5000');
// })
// ______________




// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     // write tab likhte hai jab html ke elements ko add kern ho
//     res.write('<h1>hello, home page from jsonData(topic)</h1>');
//     res.send();
// });

// app.get('/about', (req, res) => {
//     res.send('hello, about page from jsonData(topic)');
// });

// app.get('/contact', (req, res) => {
//     res.send('hello, contact page from jsonData(topic)');
// });

// app.get('/temp', (req, res) => {
//     res.send('hello, temp page from jsonData(topic)');
// })

// app.listen(5000, () => {
//     console.log('Listening to the port on 5000');
// })
// ________________


// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     // write tab likhte hai jab html ke elements ko add kern ho
//     res.write('<h1>hello, home page from jsonData(topic)</h1>');
//     res.send();
// });

// app.get('/about', (req, res) => {
//     res.send('hello, about page from jsonData(topic)');
// });

// app.get('/contact', (req, res) => {
//     res.send('hello, contact page from jsonData(topic)');
// });

// app.get('/temp', (req, res) => {
//     res.send({
//         id:1,
//         name:"aman"
//     });
// })

// app.listen(5000, () => {
//     console.log('Listening to the port on 5000');
// })
// __________________



// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     // write tab likhte hai jab html ke elements ko add kern ho
//     res.write('<h1>hello, home page from jsonData(topic)</h1>');
//     res.send();
// });

// app.get('/about', (req, res) => {
//     res.send('hello, about page from jsonData(topic)');
// });

// app.get('/contact', (req, res) => {
//     res.send('hello, contact page from jsonData(topic)');
// });

// app.get('/temp', (req, res) => {
//     res.send([
//         {
//             id:1,
//             name:"aman"
//         }
//     ]);
// })

// app.listen(5000, () => {
//     console.log('Listening to the port on 5000');
// })
// _______________



// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     // write tab likhte hai jab html ke elements ko add kern ho
//     res.write('<h1>hello, home page from jsonData(topic)</h1>');
//     res.send();
// });

// app.get('/about', (req, res) => {
//     res.send('hello, about page from jsonData(topic)');
// });

// app.get('/contact', (req, res) => {
//     res.send('hello, contact page from jsonData(topic)');
// });

// app.get('/temp', (req, res) => {
//     res.send([
//         {
//             id:1,
//             name:"aman"
//         },
//         {
//             id:2,
//             name:"om"
//         },
//         {
//             id:3,
//             name:"deepak"
//         },
//         {
//             id:4,
//             name:"vikas"
//         },
//         {
//             id:5,
//             name:"neeraj"
//         }
//     ]);
// })

// app.listen(5000, () => {
//     console.log('Listening to the port on 5000');
// })
// ______________


// other method
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // write tab likhte hai jab html ke elements ko add kern ho
    res.write('<h1>hello, home page from jsonData(topic)</h1>');
    res.send();
});

app.get('/about', (req, res) => {
    res.send('hello, about page from jsonData(topic)');
});

app.get('/contact', (req, res) => {
    res.send('hello, contact page from jsonData(topic)');
});

app.get('/temp', (req, res) => {
    res.json([
        {
            id:1,
            name:"aman"
        },
        {
            id:2,
            name:"om"
        },
        {
            id:3,
            name:"deepak"
        },
        {
            id:4,
            name:"vikas"
        },
        {
            id:5,
            name:"neeraj"
        }
    ]);
})

app.listen(5000, () => {
    console.log('Listening to the port on 5000');
})