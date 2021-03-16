import React from "react";
import './App.css';

import MyNavbar from "./component/my-navbar/mynavbar.component.jsx";
import MyCarousel from './component/my-carousel/mycarousel.component';
import TitleMessage from './component/title-message/title-message.component';

const App =() => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel/>
      <TitleMessage/>
    </div>
  );
}

export default App;
