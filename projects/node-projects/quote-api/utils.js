const getQuoteByAuthor = (arr, person) => {
  if (!Array.isArray(arr)) throw new Error("Expected an array");
  return arr.filter((ele) => ele.person === person);
};

const getRandomElement = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Expected an array");
  return arr[Math.floor(Math.random() * arr.length)];
};

const getQuoteById = (arr, id) => {
  if (!Array.isArray(arr)) throw new Error("Expected an array");

  return arr.filter((ele) => ele.id === +id);
};

const getQouteIndex = (arr, id) => {
  if (!Array.isArray(arr)) throw new Error("Expected an array");

  return arr.indexOf(arr.filter((el) => el.id === +id)[0]);
};

module.exports = {
  getRandomElement,
  getQuoteById,
  getQuoteByAuthor,
  getQouteIndex,
};
