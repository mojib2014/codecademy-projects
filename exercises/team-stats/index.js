const team = {
  _players: [
    { firstName: "Pablo", lastName: "Sanchez", age: 11 },
    { firstName: "Mojib", lastName: "Mohammad", age: 30 },
    { firstName: "Hasib", lastName: "Yaqoubi", age: 38 },
  ],
  _games: [
    { opponent: "Broncos", teamPoints: 42, opponentPoints: 27 },
    { opponent: "Hasib", teamPoints: 30, opponentPoints: 38 },
    { opponent: "Najib", teamPoints: 46, opponentPoints: 25 },
  ],

  set player(newPlayer) {},
  set game(newGame) {},
  get players() {},
  get games() {},

  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age,
    };

    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Lesli", 44);
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("John", 50, 63);
team.addGame("Doe", 30, 48);
team.addGame("Ahmad", 63, 25);
console.log(team._games);
