let teamMembers = require("./dbTeamMembers");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/teamMembers", (req, res) => {
  res.send(teamMembers);
});

app.post("/teamMembers", (req, res) => {
  const { id, name, age } = req.body;
  const newMember = {
    id,
    name,
    age,
  };

  teamMembers.push(newMember);
  res.status(201).json(newMember);
});

app.post("/teamMembers", (req, res) => {
  const { id, name, age } = req.body;
  const newMember = {
    id,
    name,
    age,
  };
  teamMembers.push(newMember);
  res.status(201).json(newMember);
});

app.put("/teamMembers/:id", (req, res) => {
  const { id } = req.params;

  const { age } = req.body;

  const p = teamMembers.find((v) => v.id == id);

  if (p && typeof age == "number") {
    p.age = age;
    res.json(p);
  } else {
    res.status(400).send({ Error: "Insira uma idade válida" });
  }
});

app.delete("/teamMembers/:id", (req, res) => {
  const { id } = req.params;
  const index = teamMembers.findIndex((v) => v.id == id);

  if (index == -1) {
    res.status(400).send("Usuário não encontrado");
  } else {
    teamMembers = teamMembers.filter((v) => v.id != id);
    res.status(204).send({ ok: "Usuário deletado com sucesso" });
  }
});

module.exports = app;

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
process.on("SIGTERM", () => {
  server.close();
});
process.on("uncaughtException", () => {
  server.close();
});
