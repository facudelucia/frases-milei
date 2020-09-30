import React from 'react'
import "./Audio.css"
import audio8 from "./assets/audios/audio8.mp3"
import GetAppIcon from '@material-ui/icons/GetApp';
function Audio8() {
  var timer;
var percent = 0;

const handlePlaying = (e) =>{
  var audio = document.getElementById("audio8"); 
  var duration = e.target.duration;
  advance(duration, audio);
}

const handlePause = () => {
  clearTimeout(timer);
}

var advance = function(duration, element) {
  var progress = document.getElementById("progress8");
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
  var audio = document.getElementById("audio8");
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
              <div class="audio__progress" id="progress8"></div>
              <audio onPlaying={handlePlaying} onPause={handlePause} id="audio8" src={audio8}></audio>
              <button class="togglePlay" onClick={()=>togglePlay()}>Play/Pause</button>
              <button class="togglePlay1"><a href={audio8} download><GetAppIcon /></a></button>
            </div>
        </div>
    )
}

export default Audio8
