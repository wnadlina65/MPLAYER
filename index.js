const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'Crush.mp3',
        displayName: 'Crush',
        cover: 'crush.jpg',
        artist: 'Yuna (ft. Usher)',
    },
    {
        path: 'Glory.mp3',
        displayName: 'Glory',
        cover: 'glory.jpg',
        artist: 'Yuna',
    },
    {
        path: 'Macchiato.mp3',
        displayName: 'Macchiato',
        cover: 'macchiato.jpg',
        artist: 'Intrigue Visio (ft. Rune)',
    },
    {
        path: 'Basics.mp3',
        displayName: 'Basics',
        cover: 'basics.png',
        artist: 'TWICE',
    },
    {
        path: 'number one girl.mp3',
        displayName: 'number one girl',
        cover: 'number1girl.jpg',
        artist: 'Rosé',
    },
    {
        path: 'dance all night.mp3',
        displayName: 'dance all night',
        cover: 'danceallnight.jpg',
        artist: 'Rosé',
    },
    {
        path: 'drinks or coffee.mp3',
        displayName: 'drinks or coffee',
        cover: 'drinksorcoffee.jpg',
        artist: 'Rosé',
    },
    {
        path: 'stay a little longer.mp3',
        displayName: 'stay a little longer',
        cover: 'stayalittlelonger.jpg',
        artist: 'Rosé',
    },
    {
        path: '3am.mp3',
        displayName: '3am',
        cover: '3am.jpg',
        artist: 'Rosé',
    },
    {
        path: 'Messy.mp3',
        displayName: 'Messy',
        cover: 'messy.png',
        artist: 'Rosé',
    },
    {
        path: 'Gone.mp3',
        displayName: 'Gone',
        cover: 'gone.png',
        artist: 'Rosé',
    },
    {
        path: 'On My Mind.mp3',
        displayName: 'On My Mind',
        cover: 'onmymind.png',
        artist: 'Alex Warren (ft. Rosé)',
    },
    {
        path: 'twilight zone.mp3',
        displayName: 'twilight zone',
        cover: 'twilightzone.png',
        artist: 'Ariana Grande',
    },
    {
        path: 'warm.mp3',
        displayName: 'warm',
        cover: 'warm.png',
        artist: 'Ariana Grande',
    },
    {
        path: 'THIS IS FOR.mp3',
        displayName: 'THIS IS FOR',
        cover: 'THISISFOR.jpg',
        artist: 'TWICE',
    }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if(isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    //Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    //Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    //Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    //Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration %60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime %60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);