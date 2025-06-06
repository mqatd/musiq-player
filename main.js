let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [






{
      name: "Penne Penne",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: " https://files.catbox.moe/tubhkx.mp3"
  },

      {
  name: "neeyen omal punchiri",
  artist: "various",
  image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
  path: "https://files.catbox.moe/ce9eq6.mp4"
},
{
  name: "kombil kombil - duet",
  artist: "various",
  image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
  path: "https://files.catbox.moe/qcn9gv.mp3"
},
{
  name: "La Bouche - Sweet Dreams",
  artist: "various",
  image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
  path: "https://files.catbox.moe/mvqbd5.m4a"
},
{
  name: "Thazhvaram",
  artist: "various",
  image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
  path: "https://files.catbox.moe/3mqwrp.mp3"
},
{
  name: "Zita's Lullaby",
  artist: "various",
  image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
  path: "https://files.catbox.moe/5eucle.mp3"
}, 

{
      name: "Kaattuvannu Chaare",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/w8bcic.mp3 "
  },


{
      name: "Imakal",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/v7j8wb.mp3"
  },
{
      name: "Pranayamanithu",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/j98mpb.mp3"
  },



{
      name: "Aalum Thee",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/0spbl7.mp3 "
  },

{
      name: "Maaran",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: " https://files.catbox.moe/3cbik1.mp3"
  },

{
      name: "Vennilavin Thaliralle",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/0v2fzg.mp3 "
  },
      






{ 
name:"Neer Palunkin - Vegam",
    artist: "various",
    image:"image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
path:"https://files.catbox.moe/cqc6b1.mp3"
},



 {
      name: "Orbit",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/2wq806.mp3 "
  },



{
    name: "Rebirth",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/pcqsve.mp3"
  },{
    name: "Kasavinal",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/x1s0cz.mp3"
  },{
    name: "Yaanam",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/7v41i5.mp3"
  },{
    name: "Mulchedi",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/pp8s19.mp3"
  },

  {
    name: "Ee Raavum",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/cqkshs.mp3"
  },{
    name: "Kandu Ravithalil",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/oywxfl.mp3"
  },{
    name: "Neerpalunku Mizhi",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/5d4ojz.mp3"
  },{
    name: "ZAARA",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/j1ra03.mp3"
  },{
    name: "Panimathiye",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/tse96n.mp3"
  },{
    name: "Tune Jo Na Kaha",
    artist: "various",
    image: "image.gif?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.catbox.moe/ivvndy.mp3"
  },
  
];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

