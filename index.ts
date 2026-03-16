import express from "express";
const app = express();
const data = require("./pokemon.ts");
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Current port: ${port}`);
});

app.get("/", (req, res) => {
  res.send({ data });
});
