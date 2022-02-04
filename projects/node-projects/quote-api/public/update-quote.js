const updateBtn = document.querySelector("#update-quote");
const updatedQuoteContainer = document.querySelector("#updated-quote");
const editBtn = document.getElementById("edit-btn");

console.log(editBtn);
updateBtn.addEventListener("click", () => {
  const quote = document.getElementById("quote").value;
  const person = document.getElementById("person").value;
  const id = editBtn.getAttribute("data-id");
  console.log("id", id);

  fetch("/api/quotes/");
});
