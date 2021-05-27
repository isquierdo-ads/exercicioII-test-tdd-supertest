const teamMembers = require("./dbTeamMembers");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000

app.use(express.json());
app.use(cors());


app.get("/teamMembers", (req, res) => {
  res.send(teamMembers);
});

app.post("/teamMembers", (req, res) => {
  const { name, age } = request.body;
  const newMember = {
    name,
    age,
  };

  teamMembers.push(newMember);
  response.status(201).json(newMember);
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
