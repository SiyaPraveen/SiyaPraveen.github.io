import './App.css';
import { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import Header from './Header';

function App() {
  const carRef = useRef();

  function logit(e) {
    console.log('calc(100% -' + e.srcElement.scrollTop + 'px) 0px')
    carRef.current.style.backgroundPosition = 'calc(101% - ' + e.srcElement.scrollTop + 'px) bottom'
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit, true);
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <div className="">
        <Parallax pages={2} style={{ top: '0px', left: '0' }} className="animation"  >
          <ParallaxLayer offset={0} speed={0.95} style={{ top: '0px', left: '0' }}>
            <div className="animation_layer parallax" id="sky"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.85} style={{ top: '0px', left: '0' }}>
            <div className="animation_layer parallax" id="logo"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.75}  >
            <div className="animation_layer parallax" id="building_1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.6} style={{ top: '0px', left: '0' }}>
            <div className="animation_layer parallax" id="building_2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.45} style={{ top: '0px', left: '0' }}>
            <div className="animation_layer parallax" id="building_3"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.45} style={{ top: '0px', left: '0' }}>
            <div className="animation_layer parallax" id="road"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.45} style={{ top: '0px', left: '0' }}>
            <div className="animation_layer parallax" id="car" ref={carRef}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.45} style={{ top: '0px', right: '0px' }}>
            <div className="animation_layer parallax" id="pump"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.45} style={{ top: '0px', right: '0px' }}>
            <div className="animation_layer parallax" id="leftBuilding"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.45} style={{ top: '-200px', left: '0' }}>
            <div className="animation_layer parallax" >
              hjhhlhl<br></br>hjhhlhl<br></br>hjhhlhl<br></br>hjhhlhl<br></br>hjhhlhl<br></br>hjhhlhl<br></br>hjhhlhl<br></br>hjhhlhl<br></br>hjhhlhl<br></br>
            </div>
          </ParallaxLayer>

        </Parallax>
      </div>
    </div>
  );
}

export default App;
