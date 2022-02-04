// Write your function here:
function finalGrade(num1, num2, num3) {
  // Checking the input numbers
  if (
    num1 < 0 ||
    num1 > 100 ||
    num2 < 0 ||
    num2 > 100 ||
    num3 < 0 ||
    num3 > 100
  ) {
    return "You have entered an invalid grade.";
  }

  // Calculating the average score
  const average = Math.floor((num1 + num2 + num3) / 3);

  // Based on the score returning a text result with the following helper function
  return showLetterGrade(average);
}

function showLetterGrade(average) {
  // switch(true) will go through every case, and see if
  // any case evaluates to true than it'll return that.
  switch (true) {
    case average >= 0 && average <= 59:
      return "F";
      break;
    case average >= 60 && average <= 69:
      return "D";
      break;
    case average >= 70 && average <= 79:
      return "C";
      break;
    case average >= 80 && average <= 89:
      return "B";
      break;
    case average >= 90 && average <= 100:
      return "A";
      break;
  }
}

// Uncomment the line below when you're ready to try out your function
console.log("final", finalGrade(99, 92, 95)); // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
