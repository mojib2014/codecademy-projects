// The keys and notes variables store the piano keys
const keys = [
  "c-key",
  "d-key",
  "e-key",
  "f-key",
  "g-key",
  "a-key",
  "b-key",
  "high-c-key",
  "c-sharp-key",
  "d-sharp-key",
  "f-sharp-key",
  "g-sharp-key",
  "a-sharp-key",
];
const notes = [];
keys.forEach(function (key) {
  notes.push(document.getElementById(key));
});

// Write named functions that change the color of the keys below
const keyPlay = (event) => {
  event.target.style.backgroundColor = "#DDD";
};

// Write a named function with event handler properties
const keyReturn = (event) => {
  event.target.style.backgroundColor = "";
};

const eventAssignment = (note) => {
  note.addEventListener("mousedown", keyPlay);
  note.addEventListener("mouseup", keyReturn);
};
// Write a loop that runs the array elements through the function
notes.forEach((note) => eventAssignment(note));

// Custom function for sellecting an element with an id from the DOM
const changeContentOfEleWithID = (id, value) => {
  return (document.getElementById(id).innerHTML = value);
};

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById("first-next-line");
let nextTwo = document.getElementById("second-next-line");
let nextThree = document.getElementById("third-next-line");
let startOver = document.getElementById("fourth-next-line");

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById("column-optional");

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function () {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  changeContentOfEleWithID("letter-note-five", "D");
  changeContentOfEleWithID("letter-note-six", "C");
};

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function () {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  changeContentOfEleWithID("word-five", "DEAR");
  changeContentOfEleWithID("word-six", "FRI");
  lastLyrics.style.display = "inline-block";
  changeContentOfEleWithID("letter-note-three", "G");
  changeContentOfEleWithID("letter-note-four", "E");
  changeContentOfEleWithID("letter-note-six", "B");
};

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function () {
  startOver.hidden = false;
  nextThree.hidden = true;
  changeContentOfEleWithID("word-two", "PY");
  changeContentOfEleWithID("word-three", "BIRTH");
  changeContentOfEleWithID("word-four", "DAY");
  changeContentOfEleWithID("word-five", "TO");
  changeContentOfEleWithID("word-six", "YOU!");
  changeContentOfEleWithID("letter-note-one", "F");
  changeContentOfEleWithID("letter-note-two", "F");
  changeContentOfEleWithID("letter-note-three", "E");
  changeContentOfEleWithID("letter-note-four", "C");
  changeContentOfEleWithID("letter-note-five", "D");
  changeContentOfEleWithID("letter-note-six", "C");
  lastLyrics.style.display = "none";
};

// This is the event handler property and function for the startOver button
startOver.onclick = function () {
  nextOne.hidden = false;
  startOver.hidden = true;
  changeContentOfEleWithID("word-one", "HAP-");
  changeContentOfEleWithID("letter-note-one", "G");
  changeContentOfEleWithID("word-two", "PY");
  changeContentOfEleWithID("letter-note-two", "G");
  changeContentOfEleWithID("word-three", "BIRTH-");
  changeContentOfEleWithID("letter-note-three", "A");
  changeContentOfEleWithID("word-four", "DAY");
  changeContentOfEleWithID("letter-note-four", "G");
  changeContentOfEleWithID("word-five", "TO");
  changeContentOfEleWithID("letter-note-five", "C");
  changeContentOfEleWithID("word-six", "YOU!");
  changeContentOfEleWithID("letter-note-six", "B");
};
