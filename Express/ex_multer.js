const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();

// Create 'uploads' folder if it doesn't exist
const dir = './uploads';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname.toLowerCase());
        if (ext === '.pptx') {
            cb(null, file.fieldname + '-' + Date.now() + ext);
        } else {
            cb(new Error('Only .pptx files are allowed'));
        }
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }  // 5 MB
});

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

// Upload form
app.get('/', (req, res) => {
    res.send(`
        <form action="/upload" method="post" enctype="multipart/form-data">
            <label for="file">Choose a PPTX file to upload:</label><br/><br/>
            <input type="file" name="file" id="file" accept=".pptx"><br/><br/>
            <button type="submit">Upload File</button>
        </form>
    `);
});

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
    res.send(`File uploaded successfully: 
        You can access it <a href="/uploads/${req.file.filename}">here</a>`);
});

// Global Error Handler (must be last)
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).send('File Upload Failed: ' + err.message);
    } else {
        return res.status(400).send('Error: ' + err.message);
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});