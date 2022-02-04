const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    set appetizers(newAppe) {
      if (typeof newAppe === "string") this.appetizers.push(newAppe);
      else return "Please enter a string.";
    },
    get appetizers() {
      return this.appetizers;
    },
    set appetizers(newMain) {
      if (typeof newMain === "string") this.appetizers.push(newMain);
      else return "Please enter a string.";
    },
    get appetizers() {
      return this.mains;
    },
    set appetizers(newDesserts) {
      if (typeof newDesserts === "string") this.appetizers.push(newDesserts);
      else return "Please enter a string.";
    },
    get appetizers() {
      return this.desserts;
    },
  },
  get courses() {
    return this._courses;
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };

    if (courseName === "appetizers") this._courses.appetizers.push(dish);
    else if (courseName === "mains") this._courses.mains.push(dish);
    else if (courseName === "desserts") this._courses.desserts.push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },

  generateRandomMeaml() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");

    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your random meal is: ${appetizer.name}, ${main.name}, and ${dessert.name}, Total Price: $${totalPrice}.`;
  },
};

menu.addDishToCourse("appetizers", "bollaani", 12);
menu.addDishToCourse("mains", "Qabeli", 20);
menu.addDishToCourse("desserts", "Baghlaawa", 14);
console.log(menu.generateRandomMeaml());
