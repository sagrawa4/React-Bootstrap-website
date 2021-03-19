import React from "react";
import './App.css';
import Fade from 'react-reveal/Fade';
import { Parallax } from "react-parallax";

import MyNavbar from "./component/my-navbar/mynavbar.component.jsx";
import MyCarousel from './component/my-carousel/mycarousel.component';
import TitleMessage from './component/title-message/title-message.component';
import About from "./pages/about/about.component";
import Container from 'react-bootstrap/Container';
import Skills from './pages/skills/skills.component.jsx'

const App =() => {
  return (
    <div  className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel/>
      <TitleMessage/>
      <div>
       
        <Container className="container-box rounded">
          <Fade duration={500}>
            <About />
          </Fade>
        </Container>
    
      </div>

     
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
          <Skills/>
          </Fade>
        </Container>
      </div>
    </div>
  );
}

export default App;
