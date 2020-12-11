const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage( {
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});

const uploads = multer({ storage });

router.get('/', (req, res) => {
    const uploadsDirectory = path.join('uploads');

    fs.readdir(uploadsDirectory, (err, files) => {
        if (err) {
            return res.json( { msg: err})
        }

        if (files.length === 0) {
            return res.json ( {msg: 'No images'})
        }

        return res.json ({files})
    })
})

router.post('/', uploads.single('image'), async (req, res) => {
    const image = req.files.path;
    res. json({ msg: 'image created'})
});