// Variables
let raceNumber = Math.floor(Math.random() * 1000);
let hasRegisteredEarly = false;
let runnersAge = 20;
let registrationTime = "10:30";

// Control flow
if (runnersAge > 18 && hasRegisteredEarly) {
  raceNumber += 1000;
}

if (runnersAge > 18 && registrationTime === "9:30") {
  console.log(
    `Runners over 18 years of age with race number(${raceNumber}) will race at ${registrationTime}AM.`,
  );
} else if (runnersAge > 18 && !hasRegisteredEarly) {
  console.log(`Runners with race number ${raceNumber} will race at 11:00 AM`);
} else if (runnersAge < 18) {
  console.log(
    `Youth registrants with race number ${raceNumber} run at 12:30 PM`,
  );
} else {
  console.log("Runners of age 18, Please see the registration desk");
}
