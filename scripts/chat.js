const chatBtn = document.querySelector(" .chat-btn");
const chatContainer = document.querySelector(".chatbot-container");

const URL = "http://localhost:3000/"

chatBtn.addEventListener("click", () => {
  chatContainer.classList.toggle("hide")
});



