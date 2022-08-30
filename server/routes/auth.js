const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send("this is a index")
})
router.get('/register', (req, res) => {
    res.send("this is a index")
})


module.exports = router;