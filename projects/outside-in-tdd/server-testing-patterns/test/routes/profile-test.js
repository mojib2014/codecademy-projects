const { assert } = require("chai");
const request = require("supertest");
const { jsdom } = require("jsdom");

const app = require("../../app");

// Helper function
const parseTextFromHTML = (htmlAsString, selector) => {
  const selectedElement = jsdom(htmlAsString).querySelector(selector);
  if (selectedElement !== null) {
    return selectedElement.textContent;
  } else {
    throw new Error(
      `No element with selector ${selector} found in HTML string`,
    );
  }
};

describe("profile page", () => {
  describe("GET request", () => {
    it("greets user with custom message", async () => {
      const username = "alice";
      const response = await request(app).get("/profile/" + username);
      assert.equal(
        parseTextFromHTML(response.text, "#welcome-message"),
        "Welcome " + username + "!",
      );
    });
  });
});
