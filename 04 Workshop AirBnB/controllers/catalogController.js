const { getAll } = require('../services/acommodationService');

const router = require('express').Router();

router.get('/', (req, res) => {
    const rooms = getAll();
    res.render('catalog', {
        title: 'All Accomodation',
        rooms
    });
});

router.get('/:id', (req, res) => {
    res.render('details', {
        title: 'Accomodation Details' 
    });
});



module.exports = router;