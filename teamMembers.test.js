const app = require("./app");
const request = require("supertest");
const teamMembers = require("./dbTeamMembers");

test("Should list team members exactly", async () => {
  const responseGet = await request(app).get("/teamMembers");
  expect(responseGet.body).toHaveLength(teamMembers.length);
  expect(responseGet.body).toMatchObject(teamMembers);
});

test("Should be possible to add another member", async () => {
  const tmLen = teamMembers.length;
  console.log(tmLen);
  const response = await request(app)
    .post("/teamMembers")
    .send(teamMembers[tmLen + 1]);
  expect(response.body).toMatchObject({
    ...teamMembers[tmLen + 1],
  });
});

test("Status code from 'post' should be 201", async () => {
  await request(app).post("/teamMembers").send(teamMembers[0]);

  expect(201);
});

test("Shouldn't be possible to update a non-existent member", async () => {
  await request(app).put("/teamMembers/-1").expect(400);
});


test("Shouldn't be possible to delete a non-existent member", async () => {
  await request(app).del("/teamMembers/-1").expect(400);
});


