const fetchAllButton = document.getElementById("fetch-quotes");
const fetchRandomButton = document.getElementById("fetch-random");
const fetchByAuthorButton = document.getElementById("fetch-by-author");
const editByIdBtn = document.getElementById("edit-by-id");
const deleteBtn = document.getElementById("delete-btn");

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.querySelector(".quote");
const attributionText = document.querySelector(".attribution");
const alertContainer = document.querySelector(".alert-container");

const resetQuotes = () => {
  quoteContainer.innerHTML = "";
};

const renderError = (response) => {
  quoteContainer.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
};

const renderQuotes = (quotes = []) => {
  resetQuotes();
  if (quotes.length > 0) {
    quotes.forEach((quote) => {
      const newQuote = document.createElement("div");
      newQuote.className = "single-quote";
      newQuote.innerHTML = `<div class="quote-text">${quote.quote}</div>
      <div class="attribution">- ${quote.person}</div>
      <div class="year">- ${quote.year}</div>`;

      quoteContainer.appendChild(newQuote);
    });
  } else {
    quoteContainer.innerHTML = "<p>Your request returned no quotes.</p>";
  }
};

fetchAllButton.addEventListener("click", () => {
  fetch("/api/quotes")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        renderError(response);
      }
    })
    .then((response) => {
      renderQuotes(response.quotes);
    });
});

fetchRandomButton.addEventListener("click", () => {
  fetch("/api/quotes/random")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        renderError(response);
      }
    })
    .then((response) => {
      renderQuotes([response.quote]);
    });
});

fetchByAuthorButton.addEventListener("click", () => {
  const author = document.getElementById("author").value;
  fetch(`/api/quotes?person=${author}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        renderError(response);
      }
    })
    .then((response) => {
      renderQuotes(response.quotes);
    });
});

editByIdBtn.addEventListener("click", () => {
  const id = document.getElementById("update-id").value;
  const quote = document.getElementById("quote").value;
  const person = document.getElementById("person").value;

  fetch(`/api/quotes/${id}?quote=${quote}&person=${person}`, { method: "PUT" })
    .then((response) => {
      if (response.ok) return response.json();
      else renderError(response);
    })
    .then(({ quote }) => {
      const updated = document.createElement("div");
      updated.innerHTML = `
        <h3>Congrats, your quote was updated!</h3>
        <div class="quote-text">${quote[0].quote}</div>
        <div class="attribution">${quote[0].person}</div>
        <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
      `;
      alertContainer.appendChild(updated);

      setTimeout(() => {
        alertContainer.style.display = "none";
      }, 5000);
    });
});

deleteBtn.addEventListener("click", () => {
  const id = document.getElementById("delete-id").value;

  fetch(`/api/quotes/${id}`, { method: "DELETE" })
    .then((response) => {
      if (response.ok) return response.json();
      else renderError(response);
    })
    .then(({ quote }) => {
      const container = document.createElement("div");
      container.className = "alert";
      container.innerHTML = `<p>Congrats, your quote was successfully deleted</p>`;
      alertContainer.appendChild(container);
      setTimeout(() => {
        alertContainer.style.display = "none";
      }, 5000);
    });
});
