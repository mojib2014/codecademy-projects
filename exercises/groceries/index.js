// Write function below
const groceries = (list) => {
  let listString = "";

  for (let i = 0; i < list.length; i++) {
    listString += list[i].item;

    if (i < list.length - 2) listString += ", ";
    else if (i === list.length - 2) listString += " and ";
  }
  return listString;
};

console.log(
  groceries([
    { item: "Carrots" },
    { item: "Hummus" },
    { item: "Pesto" },
    { item: "Rigatoni" },
  ]),
);
