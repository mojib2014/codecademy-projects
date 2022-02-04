const { assert } = require("chai");
const request = require("supertest");
const { jsdom } = require("jsdom");

const app = require("../../app");

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

describe("/messages", () => {
  describe("POST", () => {
    describe("when the Message is valid", () => {
      it("redirects to the index", async () => {
        const author = "Inquisitive User";
        const message = "Why Test?";

        const response = await request(app)
          .post("/messages")
          .type("form")
          .send({ author, message });

        assert.equal(response.status, 302);
        assert.equal(response.headers.location, "/");
      });
    });

    describe("when the author is blank", () => {
      it("renders an error message", async () => {
        const message = "Server Testing";

        const response = await request(app).post("/messages").send({ message });
        assert.equal(response.status, 400);
        assert.equal(
          JSON.parse(response.text).message,
          "Every message requires an author",
        );
      });
    });
  });
});
