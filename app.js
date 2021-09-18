let playpause = document.querySelector('.play-pause');
let previous = document.querySelector('.prev');
let next = document.querySelector('.next');
let song = document.querySelector('.songName');
let singer = document.querySelector('.singerName');
let movie = document.querySelector('.movieName');
let duration = document.querySelector('.Duration');
let songimage = document.querySelector('.img');
let track = document.createElement('audio');
let index_num = 0;
let playing = false;

let track_list = [{
    name: 'Phir Bhi Aas Lagi Hai Dil Mein',
    path: 'Music/m1.mp3',
    artist: "Aryan's",
    im: 'images/m1.jpg',
    movie: 'Album',
    duration: '03:16 min'
  },
  {
    name: 'Is Qadar - Darshan Raval',
    path: 'Music/m2.mp3',
    artist: "Tulsi Kumar, Darshan Raval",
    im: 'images/m2.jpg',
    movie: 'Album',
    duration: '03:46 min'
  },
  {
    name: 'Tujhe Bhoolna Toh Chaaha',
    path: 'Music/m3.mp3',
    artist: "Jubin Nautiyal",
    im: 'images/m3.jpg',
    movie: 'Album',
    duration: '04:35 min'
  },
  {
    name: 'Oye Hoye Hoye - Jassie Gill',
    path: 'Music/m4.mp3',
    artist: "Jassie Gill",
    im: 'images/m4.jpg',
    movie: 'Album',
    duration: '02:52 min'
  },
  {
    name: 'Birthday Pawri - Meet Bros',
    path: 'Music/m5.mp3',
    artist: "Meet Bros",
    im: 'images/m5.jpg',
    movie: 'Album',
    duration: '04:04 min'
  },
  {
    name: 'Kutti Mohabbat',
    path: 'Music/m6.mp3',
    artist: "Jubin Nautiyal",
    im: 'images/m6.jpg',
    movie: 'Album',
    duration: '03:48 min'
  }

]

function loadSong(index_num) {
  track.src = track_list[index_num].path;
  track.load()
  song.textContent = 'Song Name: ' + track_list[index_num].name;
  singer.textContent = 'Singer Name: ' + track_list[index_num].artist;
  songimage.src = track_list[index_num].im;
  movie.textContent = 'Movie Name: ' + track_list[index_num].movie;
  duration.textContent = 'Duration: ' + track_list[index_num].duration;
  track.addEventListener('ended', next)
}

loadSong(index_num)

playpause.addEventListener('click', function() {
  if (playing) {
    pause();
  } else {
    paly();
  }
});

function play() {
  track.play();
  playing = true;
  playpause.classList.replace('fa-play', 'fa-pause');
}

function pause() {
  track.pause();
  playing = false;
  playpause.classList.replace('fa-pasue', 'fa-play');
}

previous.addEventListener('click', function() {
  if (index_num > 0) {
    index_num = index_num - 1;
  } else {
    index_num = track_list.length - 1;
  }
  loadSong(index_num);
  play();
})

next.addEventListener('click', function() {
  if (index_num < track_list.length - 1) {
    index_num = index_num + 1;
  } else {
    index_num = 0;
  }
  loadSong(index_num);
  play();
})

let so = document.getElementsByClassName('play-song');
for (let i = 0; i < so.length; i++) {
  so[i].addEventListener('click', function() {
    loadSong(i);
    play();
  });
}
