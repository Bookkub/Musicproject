let cardaudio = document.querySelectorAll("#card--audio");
let cardplayicon = document.querySelectorAll("#card--playicon");
let tableaudio = document.querySelectorAll("#table--audio");
let tableplayicon = document.querySelectorAll("#table--playicon");

let startTime = document.querySelector('#startTime');
let endTime = document.querySelector('#endTime');
let songduration = document.querySelectorAll("#songduration");

let playslidebar = document.querySelector('#slidebarplay'); //ปุ่ม play บน audio player

let sliderbar = document.querySelector('.progress-container');
let volumebar = document.querySelector('.volume-container');

let audioplayer =  document.querySelector('.audio-player');
let currentSong = document.querySelector("#audiobtn");
let minute;
let second;

let Parent;
let count=0;

var interval;
let playiconcard; //ปุ่ม play บน card
let playicontable; //ปุ่ม play บน table

let  Songimage =  document.querySelectorAll('.song--img__data');
let  Songname =  document.querySelectorAll('.song--name__data');
let  Songartist =  document.querySelectorAll('.song--artist__data');

let  trackimg =  document.querySelector('.track_img');
let  trackname =  document.querySelector('.track-name');
let  trackartistname =  document.querySelector('.track-artist-name');

function showmore() {
    morerow = document.querySelectorAll('.morerow');
    showmorebtn = document.querySelector('.showmore');
    morerow.forEach(hide => {
        hide.classList.remove('hidden');
    });
    showmorebtn.classList.add('hidden');
}

function Songduration() {
    let durian;
    let start = Math.floor(currentSong.duration / 60);
    let end = (Math.floor((currentSong.duration % 60) / 60 * 60));
    if(count === 0){
        start = 0;
        end = 0;
        count = 1;
    }

    durian = start + "." + end.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    endTime.textContent = durian;
    sliderbar.max = currentSong.duration;

    start = Math.floor(currentSong.currentTime / 60);
    end = (Math.floor((currentSong.currentTime % 60) / 60 * 60));
    durian = start + "." + end.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    startTime.textContent = durian;

    sliderbar.value = currentSong.currentTime;
    if(currentSong.ended){
        playiconcard.src = "/image/icons/play-button.png";
        playslidebar.classList.add('fa-play');
        playslidebar.classList.remove('fa-pause');
        playiconcard.classList.add('fa-play');
        playiconcard.classList.remove('fa-pause');
    }
}

if(count === 0){
    Songduration();
    count = 1;
}

playslidebar.addEventListener('click', function () {
    if (currentSong.paused) {
        currentSong.play();
        interval = setInterval(Songduration, 1000);
        playslidebar.classList.remove('fa-play');
        playslidebar.classList.add('fa-pause');
        playiconcard.src = "/image/icons/pause-button.png";
        playiconcard.classList.remove('fa-play');
        playiconcard.classList.add('fa-pause');
    } else{
        currentSong.pause();
        clearInterval(interval);
        Songduration();
        playslidebar.classList.remove('fa-pause');
        playslidebar.classList.add('fa-play');
        playiconcard.src = "/image/icons/play-button.png";
        playiconcard.classList.add('fa-play');
        playiconcard.classList.remove('fa-pause');
    }
});

sliderbar.addEventListener('change', function () {
    currentSong.currentTime = sliderbar.value;
    clearInterval(interval);
    Songduration();
    interval = setInterval(Songduration, 1000);
});

volumebar.addEventListener('input', function(){
    currentSong.volume = volumebar.value;
    clearInterval(interval);
    Songduration();
    interval = setInterval(Songduration, 1000);
});

for (let i = 0; i < cardaudio.length; i++) {
    cardaudio[i].onloadedmetadata = function () {
        minute = Math.floor(cardaudio[i].duration / 60);
        second = (Math.floor((cardaudio[i].duration % 60) / 60 * 60));
        durian = minute + "." + second.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    };
    cardplayicon[i].addEventListener('click', function () {
        if (cardaudio[i].paused) {
            for (let j = 0; j < cardaudio.length; j++) {
                if (i !== j) {
                    cardaudio[j].pause();
                    cardaudio[j].currentTime = 0;
                    cardplayicon[j].src = "/image/icons/play-button.png";
                } else {
                    cardaudio[i].play();
                    currentSong = cardaudio[i];
                    cardaudio[i].volume = 0.04;
                    currentSong.volume = cardaudio[i].volume;
                    playiconcard = cardplayicon[i];
                    trackimg.src = Songimage[i].src;
                    trackname.textContent = Songname[i].textContent.trim();
                    trackartistname.textContent = Songartist[i].textContent.trim();
                    playslidebar.classList.remove('fa-play');
                    playslidebar.classList.add('fa-pause');
                    cardplayicon[i].src = "/image/icons/pause-button.png";
                    interval = setInterval(Songduration, 1000);
                }
            }
        } else {
            cardaudio[i].pause();
            playslidebar.classList.add('fa-play');
            playslidebar.classList.remove('fa-pause');
            cardplayicon[i].src = "/image/icons/play-button.png";
            clearInterval();
            Songduration();
        }
    });
}

for (let i = 0; i < tableaudio.length; i++) {
    tableaudio[i].onloadedmetadata = function () {
        minute = Math.floor(tableaudio[i].duration / 60);
        second = (Math.floor((tableaudio[i].duration % 60) / 60 * 60));
        durian = minute + "." + second.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        Parent = ((songduration[i].parentNode).parentNode);
        Parent.setAttribute('data-value', durian);
        songduration[i].textContent = durian;
    };
    tableplayicon[i].addEventListener('click', function () {
        if (tableaudio[i].paused) {
            for (let j = 0; j < tableaudio.length; j++) {
                if (i !== j) {
                    tableaudio[j].pause();
                    tableaudio[j].currentTime = 0;
                    tableplayicon[j].classList.remove('fa-pause');
                    tableplayicon[j].classList.add('fa-play');
                } else {
                    tableaudio[i].play();
                    currentSong = tableaudio[i];
                    tableaudio[i].volume = 0.04;
                    currentSong.volume = tableaudio[i].volume;
                    playiconcard = tableplayicon[i];
                    trackimg.src = Songimage[i].src;
                    trackname.textContent = Songname[i].textContent.trim();
                    trackartistname.textContent = Songartist[i].textContent.trim();
                    playslidebar.classList.remove('fa-play');
                    playslidebar.classList.add('fa-pause');
                    tableplayicon[i].classList.add('fa-pause');
                    tableplayicon[i].classList.remove('fa-play');
                    interval = setInterval(Songduration, 1000);
                }
            }
        } else {
            tableaudio[i].pause();
            playslidebar.classList.add('fa-play');
            playslidebar.classList.remove('fa-pause');
            tableplayicon[i].classList.remove('fa-pause');
            tableplayicon[i].classList.add('fa-play');
            clearInterval();
            Songduration();
        }
    });
}