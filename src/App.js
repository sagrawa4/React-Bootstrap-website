import React from "react";
import './App.css';

import MyNavbar from "./component/my-navbar/mynavbar.component.jsx";
import MyCarousel from './component/my-carousel/mycarousel.component';
import TitleMessage from './component/title-message/title-message.component';
import About from "./pages/about/about.component";

const App =() => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel/>
      <TitleMessage/>
      <About/>
    </div>
  );
}

export default App;
