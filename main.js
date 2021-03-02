// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector("#modal")
modal.hidden = true


let likeButton = document.querySelectorAll(".like-glyph");
likeButton.forEach(element => element.addEventListener('click', heart))

function heart(e){
  mimicServerCall()
  .then(function(resolve){
    let heartIcon = e.target
    if (heartIcon.textContent == EMPTY_HEART){
      setFullHeart(e)
    } else {
      setEmptyHeart(e)
      }
  })
  .catch(function(reject){
    let message = document.querySelector("#modal-message")
    message.textContent = reject
    modal.hidden = false
    setTimeout(hideModal, 5000)
  })
}

function hideModal(){
  modal.hidden = true
}

function setFullHeart(e){
  let emptyHeart = e.target
  emptyHeart.textContent = FULL_HEART
  emptyHeart.className = "activated-heart"
}

function setEmptyHeart(e){
  let fullHeart = e.target
  fullHeart.textContent = EMPTY_HEART
  fullHeart.className = ""
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
