const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Fallback for any other request to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Luther Portfolio listening at http://localhost:${port}`);
});
