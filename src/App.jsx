import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";


function App() {
  return (

      <div>
        <Header/>
        <CardContainer/>
        <Footer/>
      </div>

  );
}

export default App;
