import React from "react";
import './App.css';
import Fade from 'react-reveal/Fade';
import { Parallax } from "react-parallax";

import MyNavbar from "./component/my-navbar/mynavbar.component.jsx";
import MyCarousel from './component/my-carousel/mycarousel.component';
import TitleMessage from './component/title-message/title-message.component';
import About from "./pages/about/about.component";
import Container from 'react-bootstrap/Container';

const App =() => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel/>
      <TitleMessage/>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
          > 
        </Parallax>
        <Container className="container-box rounded">
        <Fade duration={500}>
                <About />
              </Fade>
        </Container>
        
      </div>
      
    </div>
  );
}

export default App;
