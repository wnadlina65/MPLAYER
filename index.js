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
        path: 'I GOT YOU (Feat. Lauv).mp3',
        displayName: 'I GOT YOU (Feat. Lauv)',
        cover: 'IGY.jpg',
        artist: 'TWICE, Lauv',
    },
    {
        path: 'number one girl.mp3',
        displayName: 'number one girl',
        cover: 'number1girl.jpg',
        artist: 'Rosé',
    },
    {
        path: 'Messy.mp3',
        displayName: 'Messy',
        cover: 'messy.png',
        artist: 'Rosé',
    },
    {
        path: 'warm.mp3',
        displayName: 'warm',
        cover: 'warm.png',
        artist: 'Ariana Grande',
    },
    {
        path: 'twilight zone.mp3',
        displayName: 'twilight zone',
        cover: 'warm.png',
        artist: 'Ariana Grande',
    },
    {
        path: 'dance all night.mp3',
        displayName: 'dance all night',
        cover: 'number1girl.jpg',
        artist: 'Rosé',
    },
    {
        path: 'AVOCADO (feat. Gliiico).mp3',
        displayName: 'AVOCADO (feat. Gliiico)',
        cover: 'AVOCADO.jpg',
        artist: 'Chaeyoung, Gliiico',
    },
    {
        path: 'we cant be friends (wait for your love).mp3',
        displayName: 'we cant be friends (wait for your love)',
        cover: 'warm.png',
        artist: 'Ariana Grande',
    },
    {
        path: '3am.mp3',
        displayName: '3am',
        cover: 'number1girl.jpg',
        artist: 'Rosé',
    },
    {
        path: 'GIRL.mp3',
        displayName: 'GIRL',
        cover: 'CHAEYOUNG.jpg',
        artist: 'Chaeyoung',
    },
    {
        path: 'supernatural.mp3',
        displayName: 'supernatural',
        cover: 'warm.png',
        artist: 'Ariana Grande',
    },
    {
        path: 'drinks or coffee.mp3',
        displayName: 'drinks or coffee',
        cover: 'number1girl.jpg',
        artist: 'Rosé',
    },
    {
        path: 'SHOOT (Firecracker).mp3',
        displayName: 'SHOOT (Firecracker)',
        cover: 'lil fantasy.png',
        artist: 'Chaeyoung',
    },
    {
        path: 'Hampstead.mp3',
        displayName: 'Hampstead',
        cover: 'warm.png',
        artist: 'Ariana Grande',
    },
    {
        path: 'two years.mp3',
        displayName: 'two years',
        cover: 'number1girl.jpg',
        artist: 'Rosé',
    },
    {
        path: 'My Guitar.mp3',
        displayName: 'My Guitar',
        cover: 'my guitar.jpg',
        artist: 'Chaeyoung',
    },
    {
        path: 'intro (end of the world).mp3',
        displayName: 'intro (end of the world)',
        cover: 'warm.png',
        artist: 'Ariana Grande',
    },
    {
        path: 'stay a little longer.mp3',
        displayName: 'stay a little longer',
        cover: 'number1girl.jpg',
        artist: 'Rosé',
    },
    {
        path: 'SHADOW PUPPETS.mp3',
        displayName: 'SHADOW PUPPETS',
        cover: 'CHAEYOUNG.jpg',
        artist: 'Chaeyoung',
    },
    {
        path: 'On My Mind.mp3',
        displayName: 'On My Mind',
        cover: 'Rosé and Alex.jpg',
        artist: 'Alex Warren, Rosé',
    },
    {
        path: 'BF.mp3',
        displayName: 'BF',
        cover: 'CHAEYOUNG.jpg',
        artist: 'Chaeyoung',
    },
    {
        path: 'gameboy.mp3',
        displayName: 'gameboy',
        cover: 'number1girl.jpg',
        artist: 'Rosé',
    },
    {
        path: 'DOWNPOUR (feat.Gliiico).mp3',
        displayName: 'DOWNPOUR (feat.Gliiico)',
        cover: 'CHAEYOUNG.jpg',
        artist: 'Chaeyoung, Gliiico',
    },
    {
        path: 'Gone.mp3',
        displayName: 'Gone',
        cover: 'ROSE.jpg',
        artist: 'Rosé',
    },
    {
        path: 'RIBBONS (feat. SUMIN & Jibin).mp3',
        displayName: 'RIBBONS (feat. SUMIN & Jibin)',
        cover: 'CHAEYOUNG.jpg',
        artist: 'Chaeyoung, SUMIN, Jibin',
    },
    {
        path: 'I GOT YOU.mp3',
        displayName: 'I GOT YOU',
        cover: 'IGY.jpg',
        artist: 'TWICE',
    },
    {
        path: 'BAND-AID.mp3',
        displayName: 'BAND-AID',
        cover: 'CHAEYOUNG.jpg',
        artist: 'Chaeyoung',
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





