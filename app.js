const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => res.send('world.'));
app.get('/add', (req, res) => res.send('0'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));