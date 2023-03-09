import React from "react";
import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import Contact from "./Components/Sections/Contact";
import Navigation from "./Components/Layout/Navigation";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Home />
        <About />
        <Contact />
      </main>
    </React.Fragment>
  );
}

export default App;
