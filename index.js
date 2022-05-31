const express = require('express');
const app = express();
const importData = require("./quotes.json");
let port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(port, ()=>{
    console.log(`App is running on: https://localhost:${port}`);
});