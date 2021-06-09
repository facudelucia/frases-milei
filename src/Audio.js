import React from 'react'
import "./Audio.css"
import GetAppIcon from '@material-ui/icons/GetApp';
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
    e = e || window.event;
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
    <>
      <h2>{title}</h2>
      <div className="audio">
      <div className="audio__container">
        <div className="audio__progress" id="progress"></div>
        <audio onPlaying={handlePlaying} onPause={handlePause} id="audio" src={audio}></audio>
        <button className="togglePlay" onClick={() => togglePlay()}>Play/Pause</button>
        <button className="togglePlay1"><a href={audio} download><GetAppIcon /></a></button>
      </div>
    </div>
    </>
    
  )
}

export default Audio
