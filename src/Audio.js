import React from 'react'
import "./Audio.css"
function Audio({ audio, idx, title }) {
  var timer;
  var percent = 0;

  const handlePlaying = (e) => {
    var audios = document.querySelectorAll("#audio");
    var audio = audios[idx]
    var duration = e.target.duration;
    advance(duration, audio);
  }

  const handlePause = () => {
    clearTimeout(timer);
  }

  var advance = (duration, element) => {
    var allProgress = document.querySelectorAll("#progress");
    var progress = allProgress[idx]
    var increment = 10 / duration
    var percent = Math.min(increment * element.currentTime * 10, 100);
    progress.style.width = percent + '%'
    startTimer(duration, element);
  }
  
  const startTimer = (duration, element) => {
    if (percent < 100) {
      timer = setTimeout(() => { advance(duration, element) }, 100);
    }
  }

  const togglePlay = (e) => {
    var audios = document.querySelectorAll("#audio");
    var audio = audios[idx]
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
      <h2>{title}</h2>
      <div className="audio__container">
        <div className="audio__progress" id="progress">
        </div>
        <audio onPlaying={handlePlaying} onPause={handlePause} id="audio" src={audio}></audio>
        <button className="togglePlay" onClick={(e) => togglePlay(e)}>Play/Pause</button>
        <button className="downloadButton"><a href={audio} download><i className="fas fa-download"></i></a></button>
      </div>
    </div>
  )
}

export default Audio
