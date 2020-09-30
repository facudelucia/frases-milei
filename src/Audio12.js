import React from 'react'
import "./Audio.css"
import audio12 from "./assets/audios/audio12.mp3"
import GetAppIcon from '@material-ui/icons/GetApp';
function Audio12() {
  var timer;
var percent = 0;

const handlePlaying = (e) =>{
  var audio = document.getElementById("audio12"); 
  var duration = e.target.duration;
  advance(duration, audio);
}

const handlePause = () => {
  clearTimeout(timer);
}

var advance = function(duration, element) {
  var progress = document.getElementById("progress12");
  var increment = 10/duration
  var percent = Math.min(increment * element.currentTime * 10, 100);
  progress.style.width = percent+'%'
  startTimer(duration, element);
}
const startTimer = (duration, element)=>{ 
  if(percent < 100) {
    timer = setTimeout(function (){advance(duration, element)}, 100);
  }
}

const togglePlay = (e) =>{
  e = e || window.event;
  var audio = document.getElementById("audio12");
  var btn = e.target;
  if (!audio.paused) {
    btn.classList.remove('active');
    audio.pause();
  } else {
    btn.classList.add('active');
    audio.play();
  }
}

    return (
        <div className="audio">
            <div class="audio__container">
              <div class="audio__progress" id="progress12"></div>
              <audio onPlaying={handlePlaying} onPause={handlePause} id="audio12" src={audio12}></audio>
              <button class="togglePlay" onClick={()=>togglePlay()}>Play/Pause</button>
              <button class="togglePlay1"><a href={audio12} download><GetAppIcon /></a></button>
            </div>
        </div>
    )
}

export default Audio12
