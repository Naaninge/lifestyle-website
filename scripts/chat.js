import { getElement, fetchData } from "./utils.js";

const chatBtn = document.querySelector(" .chat-btn");
const chatContainer = document.querySelector(".chatbot-container");

// const URL = "http://localhost:3000/"

chatBtn.addEventListener("click", () => {
  chatContainer.classList.toggle("hide");
});

// this list contains countries where the company operates
const clientCountries = [
  "Namibia",
  "South Africa",
  "Canada",
  "Netherlands",
  "Botswana",
];

const URL = "https://restcountries.com/v3.1/all";

$(document).ready(function () {
  console.log("page has been loaded");
  $.ajax({
    url: URL,
    method: "get",
    dataType: "json",
    success: function (data) {
      let countries = "";
      for (let i = 0; i < data.length - 1; i++) {
        const {
          name: { common },
          flags: { png },
        } = data[i];
        
        if (clientCountries.includes(common)) {
          countries += `<div>
            <p class="name">${common} </p>
            <div class="flag-div">
            <img src=${png} alt="${common} flag" class="flag">
            </div>
          </div>`;
        }
      }

      $(".country").html(countries);
    },
    error: function (err) {
      console.log(err);
    },
  });
});
