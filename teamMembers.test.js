const app = require("./app");
const request = require("supertest");
const teamMembers = require("./dbTeamMembers");

test("Should list team members exactly", async () => {
  const responseGet = await request(app).get("/teamMembers");
  expect(responseGet.body).toHaveLength(teamMembers.length);
  expect(responseGet.body).toMatchObject(teamMembers);
});







test("Should list team members exactly", async () => {
  const responseGet = await request(app).post("/teamMembers");

  expect
});
