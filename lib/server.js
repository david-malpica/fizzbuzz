//Import express
const express = require("express");
// Create express app
const app = express();
// Create port
const port = 3000;

// Principal path
app.get("/",(req,res) => {
    res.send("Hello world");
});

// Init app
app.listen(port, () => {
    console.log(`Listen port ${port}`);
});