// Determining how many hours a person sleeps
const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 7;
      break;
    case "Tuesday":
      return 9;
      break;
    case "Wednesday":
      return 7;
      break;
    case "Thursday":
      return 7;
      break;
    case "Friday":
      return 7;
      break;
    case "Saturday":
      return 7;
      break;
    case "Sunday":
      return 7;
      break;
  }
};

// console.log(getSleepHours("Wednesday"));

// Find the total hours of sleep a person gets
const getActualSleepHours = () => {
  const days = {
    Monday: 7,
    Tuesday: 7,
    Wednesday: 7,
    Thursday: 7,
    Friday: 7,
    Saturday: 7,
    Sunday: 7,
  };

  let hours = 0;
  for (let day in days) {
    hours += days[day];
  }

  return hours;
};

// Get the ideal sleep hours a person sleeps
const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

// Calculate the sleep debt of a person
const calculateSleepDebt = function () {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(7);
  if (actualSleepHours === idealSleepHours)
    console.log(`You got the perfect  amount of sleep.`);
  else if (actualSleepHours > idealSleepHours)
    console.log(
      `You got more sleep than needed.(${
        actualSleepHours - idealSleepHours
      } Hours)`,
    );
  else
    console.log(
      `You should get some rest.(${idealSleepHours - actualSleepHours} Hours)`,
    );
};

calculateSleepDebt();
