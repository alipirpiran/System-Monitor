const router = require('express').Router();
const path = require('path')

router.get('/', (req, res) => {
    // res.sendFile(__dirname + '/frontend/index.html');
    res.sendFile(path.join(__dirname, '/../../frontend/index.html'))
});

module.exports = router;
