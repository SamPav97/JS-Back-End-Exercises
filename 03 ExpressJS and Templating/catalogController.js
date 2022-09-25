const { Router } = require('express');

const router = Router();
// I just need a slash for path coz router is mounted in index
router.get('/', (req, res) => {
    res.send('Catalog page')
});

router.get('/:productId', (req, res) => {
    console.log(req.params);
    res.send('Product Details Page')
});

router.get('/:category/:id', (req, res) => {
    console.log(req.params);
    res.send('Nester Params')
});

module.exports = router;