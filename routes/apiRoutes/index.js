const fs = require('fs');
const path = require('path');
const { nanoid } = require('nanoid');
const router = require('express').Router();
const notes = require('../../db/db.json');

function createNewNote(body, noteArray) {
    const note = body;
    note.id = nanoid(10);
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(noteArray, null, 2)
    );
    return body;
};

function deleteNote(id, noteArray) {
    noteArray.splice(noteArray.findIndex(noteObject => noteObject.id === id), 1);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(noteArray, null, 2)
    );
    return id;
};

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, notes)
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const note = deleteNote(req.params.id, notes)
    res.json(note);
});

module.exports = router;