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
let volumeup = document.querySelector('.volumeupicon');

let audioplayer = document.querySelector('.audio-player');
let currentSong = document.querySelector("#audiobtn");
let minute;
let second;

let Parent;

var interval;
let playicontable; //ปุ่ม play บน card


let Songimage = document.querySelectorAll('.song--img__data');
let Songname = document.querySelectorAll('.song--name__data');
let Songartist = document.querySelectorAll('.song--artist__data');
let Songlinkcard = document.querySelectorAll('.song--link__card');
let Songlinktable = document.querySelectorAll('.song--link__table');

let trackimg = document.querySelector('.track_img');
let trackname = document.querySelector('.track-name');
let trackartistname = document.querySelector('.track-artist-name');

let body = document.querySelector('.body');

let mainmenu = document.querySelectorAll('.main-menu');
let cardsubmenu = document.querySelectorAll('.card--sub__menu');
let tablesubmenu = document.querySelectorAll('.table--sub__menu');
let forwardbtn = document.querySelector('#slidebarforward');
let backwardbtn = document.querySelector('#slidebarbackward');
let nextbtndiv = document.querySelector('.nextbtn');
let previousbtndiv = document.querySelector('.previousbtn');

let playstatus = 0;
let queue = [];
let queueindex = [];
let recentqueue = [];
let recentindex = [];
let allsong = [];
let allsongqueue = [];

function showmore() {
    morerow = document.querySelectorAll('.morerow');
    showmorebtn = document.querySelector('.showmore');
    morerow.forEach(hide => {
        hide.classList.remove('hidden');
    });
    showmorebtn.classList.add('hidden');
}


let indexallsong;

function Songduration() {
    let durian;
    let start = Math.floor(currentSong.duration / 60);
    let end = (Math.floor((currentSong.duration % 60) / 60 * 60));

    durian = start + "." + end.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    endTime.textContent = durian;
    sliderbar.max = currentSong.duration;

    start = Math.floor(currentSong.currentTime / 60);
    end = (Math.floor((currentSong.currentTime % 60) / 60 * 60));
    durian = start + "." + end.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    startTime.textContent = durian;

    sliderbar.value = currentSong.currentTime;
    if (currentSong.ended && indexallsong !== tableaudio.length - 1) {
        if (queue.length > 0) {
            queueindex = queue.shift();
            recentqueue.push(queueindex);
            currentSong.volume = 0.04;
            for (let i = 0; i < tableaudio.length; i++) {
                if (i != queueindex) {
                    tableaudio[i].pause();
                    tableplayicon[i].classList.add('fa-play');
                    tableplayicon[i].classList.remove('fa-pause');
                }
            }
            currentSong = tableaudio[queueindex];
            trackimg.src = Songimage[queueindex].src;
            trackname.textContent = Songname[queueindex].textContent.trim();
            trackartistname.textContent = Songartist[queueindex].textContent.trim();
            tableplayicon[queueindex].classList.remove('fa-play');
            tableplayicon[queueindex].classList.add('fa-pause');
            playslidebar.classList.remove('fa-play');
            playslidebar.classList.add('fa-pause');
            indexallsong = queueindex;
            currentSong.play();
        }
        else {
            allsongqueue = allsong;
            if (indexallsong < tableaudio.length-1) {
                indexallsong++;
            }
            for (let i = 0; i < tableaudio.length; i++) {
                if (i != indexallsong) {
                    tableaudio[i].pause();
                    tableplayicon[i].classList.add('fa-play');
                    tableplayicon[i].classList.remove('fa-pause');
                }
            }
            recentqueue.push(indexallsong);
            currentSong = tableaudio[indexallsong];
            trackimg.src = Songimage[indexallsong].src;
            trackname.textContent = Songname[indexallsong].textContent.trim();
            trackartistname.textContent = Songartist[indexallsong].textContent.trim();
            tableplayicon[indexallsong].classList.remove('fa-play');
            tableplayicon[indexallsong].classList.add('fa-pause');
            playicontable = tableplayicon[indexallsong];
            playslidebar.classList.remove('fa-play');
            playslidebar.classList.add('fa-pause');
            currentSong.play();
        }
    }
    if(currentSong.ended && indexallsong === tableaudio.length - 1){
        tableplayicon[indexallsong].classList.remove('fa-pause');
        tableplayicon[indexallsong].classList.add('fa-play');
        playslidebar.classList.remove('fa-pause');
        playslidebar.classList.add('fa-play');
    }
    if (indexallsong === tableaudio.length - 1 && queue.length <= 0) {
        forwardbtn.style = "color:#6d6d6d";
        nextbtndiv.style.cursor = 'default';
        forwardbtn.style.cursor = 'default';
    }
    if(indexallsong !== tableaudio.length - 1){
        forwardbtn.style = "color:white";
    }
    if (recentqueue.length <= 0) {
        backwardbtn.style = "color:#6d6d6d";
        previousbtndiv.style.cursor = 'default';
        backwardbtn.style.cursor = 'default';
        backsongcheck = 0;
    }
    if (recentqueue.length > 0) {
        backwardbtn.style = "color:white";
    }
}

playslidebar.addEventListener('click', function () {
    if (currentSong.paused) {
        currentSong.play();
        interval = setInterval(Songduration, 1000);
        playslidebar.classList.remove('fa-play');
        playslidebar.classList.add('fa-pause');
        playicontable.src = "/image/icons/pause-button.png";
        playicontable.classList.remove('fa-play');
        playicontable.classList.add('fa-pause');
    } else {
        currentSong.pause();
        clearInterval(interval);
        Songduration();
        playslidebar.classList.remove('fa-pause');
        playslidebar.classList.add('fa-play');
        playicontable.src = "/image/icons/play-button.png";
        playicontable.classList.add('fa-play');
        playicontable.classList.remove('fa-pause');
    }
});

sliderbar.addEventListener('change', function () {
    currentSong.currentTime = sliderbar.value;
    clearInterval(interval);
    Songduration();
    interval = setInterval(Songduration, 1000);
});

volumebar.addEventListener('input', function () {
    if (volumebar.value <= 0) {
        volumeup.classList.add('fa-volume-xmark');
        volumeup.classList.remove('fa-volume-up');
        currentSong.volume = volumebar.value;
        clearInterval(interval);
        Songduration();
        interval = setInterval(Songduration, 1000);
    } else {
        volumeup.classList.remove('fa-volume-xmark');
        volumeup.classList.add('fa-volume-up');
        currentSong.volume = volumebar.value;
        clearInterval(interval);
        Songduration();
        interval = setInterval(Songduration, 1000);
    }

});

let volumebuffer;
let checkvolumeturn = 0;
volumeup.addEventListener('click', function () {
    if (checkvolumeturn === 0) {
        volumeup.classList.add('fa-volume-xmark');
        volumeup.classList.remove('fa-volume-up');
        volumebuffer = volumebar.value;
        currentSong.volume = 0;
        volumebar.value = 0;
        clearInterval(interval);
        Songduration();
        interval = setInterval(Songduration, 1000);
        checkvolumeturn = 1;
    } else {
        volumeup.classList.remove('fa-volume-xmark');
        volumeup.classList.add('fa-volume-up');
        volumebar.value = volumebuffer;
        currentSong.volume = volumebar.value;
        clearInterval(interval);
        Songduration();
        interval = setInterval(Songduration, 1000);
        checkvolumeturn = 0;
    }
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
                    playicontable = cardplayicon[i];
                    trackimg.src = Songimage[i].src;
                    trackname.textContent = Songname[i].textContent.trim();
                    trackartistname.textContent = Songartist[i].textContent.trim();
                    playslidebar.classList.remove('fa-play');
                    playslidebar.classList.add('fa-pause');
                    cardplayicon[i].src = "/image/icons/pause-button.png";
                    trackname.href = Songlinkcard[i].href;
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
                    recentqueue.push(i);
                    tableaudio[i].volume = 0.04;
                    currentSong.volume = tableaudio[i].volume;
                    playicontable = tableplayicon[i];
                    indexallsong = i;
                    trackimg.src = Songimage[i].src;
                    trackname.textContent = Songname[i].textContent.trim();
                    trackartistname.textContent = Songartist[i].textContent.trim();
                    playslidebar.classList.remove('fa-play');
                    playslidebar.classList.add('fa-pause');
                    tableplayicon[i].classList.add('fa-pause');
                    tableplayicon[i].classList.remove('fa-play');
                    trackname.href = Songlinktable[i].href;
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

for (let i = 0; i < tablesubmenu.length; i++) {
    tablesubmenu[i].addEventListener('click', function () {
        queue.push(i);
        // recentqueue.push(i);
        forwardbtn.style = "color:white";
    });
}

forwardbtn.addEventListener('click', function () {
    if (queue.length > 0 ) {
        queueindex = queue.shift();
        recentqueue.push(queueindex);
        for (let i = 0; i < tableaudio.length; i++) {
            if (i != queueindex) {
                tableaudio[i].pause();
                tableplayicon[i].classList.add('fa-play');
                tableplayicon[i].classList.remove('fa-pause');
            }
        }
        currentSong.volume = 0.04;
        currentSong = tableaudio[queueindex];
        trackimg.src = Songimage[queueindex].src;
        trackname.textContent = Songname[queueindex].textContent.trim();
        trackartistname.textContent = Songartist[queueindex].textContent.trim();
        playicontable = tableplayicon[queueindex];
        playicontable.classList.add('fa-pause');
        playicontable.classList.remove('fa-play');
        playslidebar.classList.remove('fa-play');
        playslidebar.classList.add('fa-pause');
        indexallsong = queueindex;
        currentSong.play();
    } else if(queue.length <= 0) {
        indexallsong++;
        recentqueue.push(indexallsong);
        for (let i = 0; i < tableaudio.length; i++) {
            if (i != indexallsong) {
                tableaudio[i].pause();
                tableplayicon[i].classList.add('fa-play');
                tableplayicon[i].classList.remove('fa-pause');
            }
        }
        currentSong = tableaudio[indexallsong];
        trackimg.src = Songimage[indexallsong].src;
        trackname.textContent = Songname[indexallsong].textContent.trim();
        trackartistname.textContent = Songartist[indexallsong].textContent.trim();
        tableplayicon[indexallsong].classList.remove('fa-play');
        tableplayicon[indexallsong].classList.add('fa-pause');
        playicontable = tableplayicon[indexallsong];
        playslidebar.classList.remove('fa-play');
        playslidebar.classList.add('fa-pause');
        currentSong.play();
    }
});

let backsongcheck = 0;
backwardbtn.addEventListener('click', function(){
    if(backsongcheck === 0){
        recentindex = recentqueue.pop();
        backsongcheck = 1;
    }
    if(recentqueue.length > 0){
        recentindex = recentqueue.pop();
        for (let i = 0; i < tableaudio.length; i++) {
            if (i != recentindex) {
                tableaudio[i].pause();
                tableplayicon[i].classList.add('fa-play');
                tableplayicon[i].classList.remove('fa-pause');
            }
        }
        currentSong.volume = 0.04;
        currentSong = tableaudio[recentindex];
        trackimg.src = Songimage[recentindex].src;
        trackname.textContent = Songname[recentindex].textContent.trim();
        trackartistname.textContent = Songartist[recentindex].textContent.trim();
        playicontable = tableplayicon[recentindex];
        playicontable.classList.add('fa-pause');
        playicontable.classList.remove('fa-play');
        playslidebar.classList.remove('fa-play');
        playslidebar.classList.add('fa-pause');
        indexallsong = recentindex;
        currentSong.play();
    }
});

for (let i = 0; i < tableaudio.length; i++) {
    allsong.push(i);
}
