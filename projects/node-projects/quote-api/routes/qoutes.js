const express = require("express");
const router = express.Router();

const { quotes } = require("../data");
const {
  getRandomElement,
  getQuoteById,
  getQuoteByAuthor,
  getQouteIndex,
} = require("../utils");

let uniqueId = 13;

router.get("/", (req, res) => {
  if (!req.query.person) {
    res.send({ quotes: quotes });
  } else {
    const { person } = req.query;
    if (!person)
      return res.status(400).send("Please enter a valid author name");
    const author = getQuoteByAuthor(quotes, person);
    if (!author)
      return res.status(404).send("A quote with the given name was not found!");
    res.send({ quotes: author });
  }
});

router.get("/random", (req, res) => {
  const randomQuote = getRandomElement(quotes);
  res.send({ quote: randomQuote });
});

router.post("/", (req, res) => {
  const { quote, person } = req.query;
  if (!quote && !person)
    return res.status(400).send("Please provide the required inputs!");

  const newQuote = {
    id: uniqueId + 1,
    quote,
    person,
  };
  quotes.push(newQuote);
  res.send({ quote: newQuote });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { person, quote } = req.query;
  const quoteToUpdate = getQuoteById(quotes, id);

  if (!quoteToUpdate)
    return res.status(404).send("Quote with given ID was not found!");

  const updated = quotes.filter((q) => {
    if (q.id === +id) {
      q.person = person;
      q.quote = quote;
      return q;
    } else return null;
  });

  res.send({ quote: updated });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const quoteToDelete = getQuoteById(quotes, id);
  if (!quoteToDelete)
    return res.status(404).send("Quote with the given ID was not found!");

  quotes.splice(getQouteIndex(quotes, id), 1);
  uniqueId - 1;
  res.send(quoteToDelete);
});

module.exports = router;
