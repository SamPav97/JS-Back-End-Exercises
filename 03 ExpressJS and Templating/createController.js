const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('<form method="POST"><input name="name"><button>Send</button></form>');
});


// I just need a slash for path coz router is mounted in index
router.post('/',
    (req, res) => {
    res.redirect('/catalog');
})

module.exports = router;