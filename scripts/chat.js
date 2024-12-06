import { getElement, fetchData } from "./utils.js";

const chatBtn = document.querySelector(" .chat-btn");
const chatContainer = document.querySelector(".chatbot-container");

// const URL = "http://localhost:3000/"

chatBtn.addEventListener("click", () => {
  chatContainer.classList.toggle("hide");
});


// Ajax
const URL = "https://randomuser.me/api/";

$(document).ready(function () {
  console.log('page has been loaded')
  $.ajax({
    url:URL,
    method: 'get',
    dataType: 'json',
    success: function (data) {
      const users = data.results

    
      
    //   for (let i = 0; i < data.results.length; i++){
    //     let user = data.results[i]
    //     console.log(user)
    //  }


      users.forEach(user => {
           console.log(user.name)
           $(".trainer-name").text(user.name.first);
           $(".trainer-title").text(user.name.title)
           $(".trainer-image").html(`<img class="trainer-img"  src=${user.picture.thumbnail} alt=${user.name.first}>`);
        
      })
      
     
  
    },
    error: function (err) {
      console.log(err)
    }
  })
})