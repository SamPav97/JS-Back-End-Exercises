const express = require('express');
const catalogController = require('./catalogController')
const createController = require('./createController')

const app = express();
//It matters what path you declare first. If you declare just star first then it will show only that.

// app.get means react to a get method with following route and the handler function. The function consists or request n resp. w resp we send back info w request we get info bout the request.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.use('/create', createController)

// app.route('/create')
// .get((req, res) => {
//     res.send('<form method="POST"><input name="name"><button>Send</button></form>');
// })
// .post((req, res) => {
//     console.log('Handling POST request');
//     res.redirect('/catalog');
// })

app.use('/catalog', catalogController)

// // With get you get one thing.
// app.get('/create', (req, res) => {
//     res.send('<form method="POST"><input name="name"><button>Send</button></form>');
// })

// // If you make a post request to same path you get another thing.
// app.post('/create', (req, res) => {
//     console.log('Handling POST request');
//     res.end
// })

// app.get('/catalog/', (req, res) => {
//     res.send('Catalog page')
// });

// // Star is a unique filler. You can also get all paths with a specif start and end 'catalog/*/edit'
// app.get('/catalog/:productId', (req, res) => {
//     console.log(req.params);
//     res.send('Product Details Page')
// });

// app.get('/catalog/:category/:id', (req, res) => {
//     console.log(req.params);
//     res.send('Nester Params')
// });


// app.all('*', (req, res) => {
//     res.status(404).send('404 Not Found (Custom Page)');
// }); 

app.listen(3000);