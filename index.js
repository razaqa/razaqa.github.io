const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;