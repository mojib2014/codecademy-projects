const request = require("supertest");
const app = require("../index");

// =================== User API Test ========================
// Testing get all user endpoint

describe("GET /users", function () {
  it("respond with json containing a list of all users", function (done) {
    request(app)
      .get("/users")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

// Testing get a user endpoint by giving an existing user

describe("GET /users/:id", () => {
  it("respond with json containing a single user", (done) => {
    request(app)
      .get("/users/U001")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

// Testing get a user endpoint by giving a none existing user
describe("GET /users/:id", () => {
  it("respond with json user not found", (done) => {
    request(app)
      .get("/users/wrongId")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404)
      .expect('"User not found!"')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

// Testing post user endpoint
describe("POST /users", () => {
  it("respond with 201 User created!", (done) => {
    const data = {
      id: "1",
      name: "dummy",
      contact: "dummy",
      address: "dummy",
    };

    request(app)
      .post("/users")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done(err);
      });
  });
});

// Testing post user endpoint with bad data
describe("POST /users", () => {
  it("Should respond with status 400 User not created! (json)", (done) => {
    const data = {
      // id: "no id",
      name: "dummy",
      contact: "dummy",
      address: "dummy",
    };

    request(app)
      .post("/users")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .expect('"User not created!"')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
