const router = require('express').Router();
const notes = require('../../db/db.json');

router.get('/', (req, res) => {
    console.log(notes);
    res.json(notes);
});

module.exports = router;