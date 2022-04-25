import React from "react";
import { Navbar } from "./components";
import { About, Footer, Header, Skills, Work } from "./container";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
      {/* <div className="copyright">
        <p className="p-text">@2022 Shasheen</p>
        <p className="p-text">All rights reserved</p>
      </div> */}
    </div>
  );
};

export default App;
