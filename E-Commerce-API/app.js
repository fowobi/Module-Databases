const express = require("express");
const app = express();
const productsRouter = require("./product");

// Your code to run the server should go here
// Don't hardcode your DB password in the code or upload it to GitHub! Never ever do this ever.
// Use environment variables instead:
// https://www.codementor.io/@parthibakumarmurugesan/what-is-env-how-to-set-up-and-run-a-env-file-in-node-1pnyxw9yxj

// routes/products.js

app.use("/products", productsRouter);

console.log("Starting the server...");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


module.exports = app;
