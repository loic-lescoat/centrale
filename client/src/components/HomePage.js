import React from "react";
import logo from "./logo.svg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <img src={logo} className="logo" alt="logo" />
        <p id="commentary">
          Waouh! Un super site pour voir des films!
        </p>
        
      </header>

     


    </div>
  );
};

export default HomePage;
