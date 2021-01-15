const likeButton = document.querySelector('#like');
const dislikeButton = document.querySelector('#dislike');
const skipButton = document.querySelector('#skip');
const playButton = document.querySelector('#play');


function setTimer(){
    var seconds = 59;
    var minutes = 1;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML= minutes + ":" +seconds;
        seconds - 1;
        minutes - 1;

        { minutes < 1 ? minutes = 0 + "0" : minutes -= 1 }
        { seconds > 0 ? seconds -= 1 : ""}
        { seconds < 10 && seconds > 0 ? seconds = "0" + seconds : ""}
        if ( minutes === 0 && seconds === -1) {
          clearInterval(timer);
          sortLikes();
          sortDislikes();
          sortSkips();
          //render Play Again Button
          //remove timer markup
        }
    }, 100);
}

playButton.addEventListener('click', setTimer);


const cats = [
  {name: "rosie", image: 10},
  {name: "space", image: 3},
  {name: "sengye", image: 11},
  {name: "butterfly", image: 5},
  {name: "kowalsky", image: 20}
  ];

let index = 0;
let likeArray = [];
let dislikeArray = [];
let skipArray = [];

function handleCats() {
let totalCats = cats.length;
if (index < totalCats) {
  index += 1;
} else {
  index = 0
}

// likeArray.push(cats[index])
  console.log(cats[index].name, cats[index].image)
  console.log
}

function sortLikes() {
  likeArray.push(cats[index])
   console.log(`Likes: ${likeArray.length}`);
}

function sortDislikes() {
  dislikeArray.push(cats[index])
   console.log(`Dislikes: ${dislikeArray.length}`);
}

function sortSkips() {
  skipArray.push(cats[index])
    console.log(`Skips: ${skipArray.length}`);
}

likeButton.addEventListener('click', () => {
    handleCats();
    sortLikes();
});

dislikeButton.addEventListener('click', () => {
    handleCats();
    sortDislikes();
});

skipButton.addEventListener('click', () => {
    handleCats();
    sortSkips();
});


