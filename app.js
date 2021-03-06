const express = require('express');
const app     = express();
const port    = process.env.PORT || 5000;

app.use(express.static(`${__dirname}`));

app.get('/*', (req, res) =>  res.sendFile(`${__dirname}/index.html`));

app.listen(port, () => console.log(`Express started on port: ${port}`));

// app.use(express.static(`${__dirname}/public`));
//
// app.get('/*', (req, res) =>  res.sendFile(`${__dirname}/public/index.html`));
