const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const songTitle = document.getElementById("songTitle");
const playlistEl = document.getElementById("playlist");

const songs = [
  { title: "Song One", src: "songs/song1.mp3" },
  { title: "Song Two", src: "songs/song2.mp3" },
  { title: "Song Three", src: "songs/song3.mp3" }
];

let currentSongIndex = 0;
let isPlaying = false;

function loadPlaylist() {
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.onclick = () => {
      currentSongIndex = index;
      playSong();
    };
    playlistEl.appendChild(li);
  });
}

function loadSong(index) {
  audio.src = songs[index].src;
  songTitle.textContent = `Now Playing: ${songs[index].title}`;
}

function playSong() {
  loadSong(currentSongIndex);
  audio.play();
  isPlaying = true;
  playPauseBtn.textContent = "⏸️";
}

function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playPauseBtn.textContent = "▶️";
  } else {
    playSong();
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playSong();
}

// Auto play next song when current ends
audio.addEventListener("ended", nextSong);

// Load playlist on page load
loadPlaylist();
