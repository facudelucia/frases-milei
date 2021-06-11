import React, { useState } from 'react';
import './App.css';
import Audio from './Audio';
import Footer from './Footer';
import audio1 from './assets/audios/audio1.mp3'
import audio3 from './assets/audios/audio3.mp3'
import audio4 from './assets/audios/audio4.mp3'
import audio5 from './assets/audios/audio5.mp3'
import audio6 from './assets/audios/audio6.mp3'
import audio7 from './assets/audios/audio7.mp3'
import audio8 from './assets/audios/audio8.mp3'
import audio9 from './assets/audios/audio9.mp3'
import audio10 from './assets/audios/audio10.mp3'
import audio11 from './assets/audios/audio11.mp3'
import audio12 from './assets/audios/audio12.mp3'
import audio13 from './assets/audios/audio13.mp3'
import audio14 from './assets/audios/audio14.mp3'
import audio15 from './assets/audios/audio15.mp3'
import audio16 from './assets/audios/audio16.mp3'
import audio17 from './assets/audios/audio17.mp3'
import audio18 from './assets/audios/audio18.mp3'
import audio19 from './assets/audios/audio19.mp3'
import audio20 from './assets/audios/audio20.mp3'

function App() {
  const [page, setPage] = useState(0)
  const audios = [
    { audio: audio1, title: "Sobre la redistribución del ingreso" },
    { audio: audio3, title: "75 años tardariamos en ser Chile" },
    { audio: audio4, title: "A vos te molesta la redistribución del ingreso" },
    { audio: audio5, title: "Si supiera de economía no seria zurda" },
    { audio: audio6, title: "Los zurdos son violentos" },
    { audio: audio7, title: "Volvete a Cuba" },
    { audio: audio8, title: "Te pago yo el pasaje para que vuelvas a Cuba" },
    { audio: audio9, title: "Métanse lo políticamente correcto en el orto" },
    { audio: audio10, title: "Por que Macri no es liberal" },
    { audio: audio11, title: "Los políticos niegan la ley de la gravedad" },
    { audio: audio12, title: "La grieta es entre los que laburan y los políticos" },
    { audio: audio13, title: "Tenés un problema de soberbia" },
    { audio: audio14, title: "Cuando estalle la crisis vamos a preguntarle a los infectologos qué hacer" },
    { audio: audio15, title: "Le tenés alergia al excel" },
    { audio: audio16, title: "Sobre la victoria del Bolsonaro" },
    { audio: audio17, title: "El problema de Argentina es cultural" },
    { audio: audio18, title: "La redistribución del ingreso es un acto violento" },
    { audio: audio19, title: "El socialismo es el club de los penes cortos" },
    { audio: audio20, title: "Argentina produce alimentos para 400 millones de habitantes" }]
  const back = () => {
    if (page === 0) {
      return
    }
    setPage(page - 1)
  }
  const next = () => {
    if (page === 1) {
      return
    }
    setPage(page + 1)
  }
  return (
    <div className="app">
      <div className="app-title">
        <h1>Soundboard Javier Milei</h1>
      </div>
      <div className="audios-section">
        {
          page === 0
          && audios.slice(0, 9).map((item, i) => (
            <Audio audio={item.audio} idx={i} title={item.title} key={i} />
          ))
        }
        {
          page === 1
          && audios.slice(10, 18).map((item, i) => (
            <Audio audio={item.audio} idx={i} title={item.title} key={i} />
          ))
        }
      </div>
      <div className="btn-group">
        <button disabled={page === 0} onClick={() => back()} type="button" className="btn">Anterior</button>
        <button disabled={page === 1} onClick={() => next()} type="button" className="btn">Siguiente</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
