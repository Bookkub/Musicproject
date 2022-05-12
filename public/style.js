let favbtn;
let favbtnclick;

function favbutton() {
    favbtn = document.querySelector('.favbtn');
    favbtnclick = document.querySelector('.favbtn-click');
    favbtn.addEventListener('click', favunclick);
    favbtnclick.addEventListener('click', favlick);
}
function favunclick() {
    favbtn.classList.add('hidden');
    favbtnclick.classList.remove('hidden');
}
function favlick() {
    favbtnclick.classList.add('hidden');
    favbtn.classList.remove('hidden');
}

let showmorebtn;
function showmore() {
    morerow = document.querySelectorAll('.morerow');
    showmorebtn = document.querySelector('.showmore');
    morerow.forEach(hide => {
        hide.classList.remove('hidden');
    });
    showmorebtn.classList.add('hidden');
}

let mySong = document.querySelectorAll("#mySong");
let songicon = document.querySelectorAll("#playicon");

for (let i = 0; mySong.length ; i++ ) {
    songicon[i].addEventListener('click', function(){
        if (mySong[i].paused) {
            for(let j=0; mySong.length ; j++ ){
                if(i !== j){
                    mySong[j].pause();
                    mySong[j].currentTime = 0;
                    songicon[j].src = "/image/icons/play-button.png";
                } else {
                    mySong[i].play();
                    songicon[i].src = "/image/icons/pause-button.png";
                }
            }
        } else {
            mySong[i].pause();
            songicon[i].src = "/image/icons/play-button.png";
        }
    });
}

let mySongsearch = document.querySelectorAll("#mysearch");
let songiconsearch = document.querySelectorAll("#playiconsearch");

for (let i = 0; mySongsearch.length ; i++ ) {
    songiconsearch[i].onclick = function(){
        if (mySongsearch[i].paused) {
            for(let j=0; mySongsearch.length ; j++ ){
                if(i !== j){
                    mySongsearch[j].pause();
                    mySongsearch[j].currentTime = 0;
                    songiconsearch[j].classList.remove('fa-pause');
                    songiconsearch[j].classList.add('fa-play');
                } else {
                    mySongsearch[i].play();
                    songiconsearch[i].classList.add('fa-pause');
                    songiconsearch[i].classList.remove('fa-play');
                }
            }
        } else {
            mySongsearch[i].pause();
            songiconsearch[i].classList.remove('fa-pause');
            songiconsearch[i].classList.add('fa-play');
        }
    };
}