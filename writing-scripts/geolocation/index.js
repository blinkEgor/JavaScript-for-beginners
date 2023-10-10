const path = require('path');
const express = require('express');
const app = express();
const port = 2075;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/geolocation.html`);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});