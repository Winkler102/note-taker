const fs = require('fs');
const path = require('path')
const router = require('express').Router();
const notes = require('../../db/db.json');

function createNewNote(body, noteArray) {
    const note = body;
    note.id = 2;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(noteArray, null, 2)
    );
    return body;
};

router.get('/notes', (req, res) => {
    console.log(notes);
    res.json(notes);
});

router.post('/notes', (req, res) => {
    console.log(req.body);
    const note = createNewNote(req.body, notes)
    res.json(note);
});

module.exports = router;