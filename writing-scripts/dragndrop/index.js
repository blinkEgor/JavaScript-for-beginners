const path = require('path');
const express = require('express');
const app = express();
const port = 2525;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/dragndrop.html`);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});