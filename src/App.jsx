import React from 'react';
import './App.css';
import { Link, useParams } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import Küre from './animations/magicSphere1.json'
// import El from './animations/hand.json'
import { useRef } from 'react';

function App() {
  const nameRef = useRef();
  const nameRef1 = useRef();
  return (
    <div className="appContainer">
      <Player
        ref={nameRef}
        autoplay
        loop
        src={Küre}
        style={{ height: '300px', width: '300px' }}
      >
      </Player>
      {/* <Player
        ref={nameRef1}
        autoplay
        loop
        src={El}
        style={{ height: '200px', width: '200px' }}
      >
      </Player> */}
      <p className="cursive">faladdin</p>
      <p className="magicFortune">S İ H İ R L i  F A L</p>
      <p className='appContainerText'>Kaderinde seni neler bekliyor, öğrenmeye hazır mısın ?
      </p>
      <Link to="/anasayfa">
        <button className="discoverButton">Keşfet</button>
      </Link>
    </div>

  );
}

export default App;
