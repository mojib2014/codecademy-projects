const faker = require("faker");

const createFakerUser = () => ({
  email: faker.internet.email(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
});

exports.seed = async function (knex) {
  // Users
  const fakeUsers = [];
  const desiredFakeUsers = 1000;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakerUser());
  }

  await knex("users").insert(fakeUsers);
};
