import React,{useState} from 'react';
import './App.css';
import Audio from './Audio';
import Audio3 from './Audio3';
import Audio4 from './Audio4';
import Audio5 from './Audio5';
import Audio6 from './Audio6';
import Audio7 from './Audio7';
import Audio8 from './Audio8';
import Audio9 from './Audio9';
import Audio10 from './Audio10';
import Audio11 from './Audio11';
import Audio12 from './Audio12';
import Audio13 from './Audio13';
import Audio14 from './Audio14';
import Audio15 from './Audio15';
import Audio16 from './Audio16';
import Audio17 from './Audio17';
import Audio18 from './Audio18';
import Audio19 from './Audio19';
import Audio20 from './Audio20';
import Footer from './Footer';

function App() {
  const [page, setPage] = useState(0)

  const back = () =>{
    if(page == 0){
      return
    }
    setPage(page - 1)
  }
  const next = () =>{
    if(page == 1){
      return
    }
    setPage( page + 1)
  }
  return (
    <>
    <div className="app">
      <h1>Soundboard Javier Milei</h1>
        {(page == 0) &&
        <>
          <h2>Sobre la redistribución del ingreso</h2>
          <Audio />
          <h2>75 años tardariamos en ser Chile</h2>
          <Audio3 />
          <h2>A vos te molesta la redistribución del ingreso</h2>
          <Audio4 />
          <h2>Si supiera de economía no seria zurda</h2>
          <Audio5 />
          <h2>Los zurdos son violentos</h2>
          <Audio6 />
          <h2>Volvete a Cuba</h2>
          <Audio7 />
          <h2>Te pago yo el pasaje para que vuelvas a Cuba</h2>
          <Audio8 />
          <h2>Métanse lo políticamente correcto en el orto</h2>
          <Audio9 />
        </>}
        {(page==1) &&
        <>
          <h2>Por qué Macri no es liberal</h2>
          <Audio10 />
          <h2>Los políticos niegan la ley de la gravedad</h2>
          <Audio11 />
          <h2>La grieta es entre los que laburan y los políticos</h2>
          <Audio12 />
          <h2>Tenés un problema de soberbia</h2>
          <Audio13 />
          <h2>Cuando estalle la crisis vamos a preguntarle a los infectologos qué hacer</h2>
          <Audio14 />
          <h2>Le tenés alergia al excel</h2>
          <Audio15 />
          <h2>Sobre la victoria del Bolsonaro</h2>
          <Audio16 />
          <h2>El problema de Argentina es cultural</h2>
          <Audio17 />
          <h2>La redistribución del ingreso es un acto violento</h2>
          <Audio18 />
          <h2>El socialismo es el club de los penes cortos</h2>
          <Audio19 />
          <h2>Argentina produce alimentos para 400 millones de habitantes</h2>
          <Audio20 />
        </>
        }
        <div class="btn-group mb-5" role="group">
          <button onClick={()=>back()} type="button" class="btn btn-secondary">Anterior</button>
          <button onClick={()=>next()} type="button" class="btn btn-secondary">Siguiente</button>
        </div>
        <Footer />
    </div>
    
    </>
  );
}

export default App;
