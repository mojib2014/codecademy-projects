const { assert } = require("chai");
const request = require("supertest");
const { jsdom } = require("jsdom");

const app = require("../../app");

const parseTextFromHTML = (htmlString, selector) => {
  const selectedElement = jsdom(htmlString).querySelector(selector);

  if (selectedElement) return selectedElement.textContent;
  else
    throw new Error(
      `No element with selector ${selector} found in HTML string`,
    );
};

describe("root page", () => {
  describe("GET request", () => {
    it("returns a 200 status", async () => {
      const response = await request(app).get("/");

      assert.equal(response.status, 200);
    });

    it("contains the correct title", async () => {
      const response = await request(app).get("/");

      assert.equal(
        parseTextFromHTML(response.text, "#page-title"),
        "Messaging App",
      );
    });
  });
});
