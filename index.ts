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

/*app.get("/", (req, res) => {
  const singleTypePokemon = [
    ...data.pokemon
      .filter((d: any) => d.types[1] === "None")
      .map((d: any) => d.name),
  ];

  res.send({ data, singleTypePokemon });
});

console.log([
  ...data.pokemon.filter(
    (d: any) => d.types[0] === "Grass" && d.types[1] === "Poison"
  ),
]);

for (let i = 0; i < data.pokemon.length; i++) {
  if (data.pokemon[i].types[1] === "None") {
    console.log(data.pokemon[i].name);
  }
}*/

console.log(data.pokemon[0].types); //['Grass', 'Poison']; => works
