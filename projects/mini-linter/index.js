let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

// Converting the story paragraph to an array of words
const storyWords = story.split(" ");

// Removing the unnecessary words
const betterWords = storyWords.filter(
  (word) => !unnecessaryWords.includes(word),
);

// Counting words
let overusedWordsCount = 0;
let overused = "";
betterWords.forEach((word) => {
  if (overusedWords.includes(word)) {
    overusedWordsCount++;
    overused += word + ", ";
  }
});
// console.log(
//     `you have used ${count} times these words: ${overused}.`);

// Counting number of sentences in betterWords array
let sentencesCount = 0;
for (let i = 0; i < betterWords.length; i++) {
  if (betterWords[i].includes(".") || betterWords[i].includes("!"))
    sentencesCount++;
}

// Formated variables logging function
const logger = (storyWords, overusedWordsCount, sentencesCount) => {
  return `Number of words: ${storyWords.length} \n
    Number of overused words: ${overusedWordsCount} \n
    Number of sentences: ${sentencesCount}`;
};

console.log(logger(storyWords, overusedWordsCount, sentencesCount));

console.log("Better words: ", betterWords.join(" "));

// Removing the overused words every other time it appears
const removeEveryOtherTime = (array) => {
  let everyOtherRemoved = "";
  for (let i = 0; i < array.length; i++) {
    if (!overusedWords.includes(array[i])) everyOtherRemoved += array[i] + " ";
  }
  return everyOtherRemoved;
};
console.log("------------------------------------------");
console.log("Every other time: ", removeEveryOtherTime(storyWords));
console.log("------------------------------------------");

const repeatedWord = (array) => {
  const hash = {};
  let count = 0;
  let word = "";
  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) hash[array[i]] = count + 1;
    else hash[array[i]] = hash[array[i]] + 1;
  }
  let max = 0;
  for (let key in hash) {
    if (hash[key] > max) {
      max = hash[key];
      word = key;
    }
  }
  return word;
};

console.log("The most repeated Word is: ", repeatedWord(storyWords));
