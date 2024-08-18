import React from "react";
import Hero from "./components/Hero";
import Dishesh from "./components/Dishesh";
import About from "./components/About";
import Mission from "./components/Mission";

const App = () => {
  return (
    <main className=" overflow-y-hidden text-neutral-200 antialiased">
      <Hero />
      <Dishesh />
      <About />
      <Mission />
    </main>
  );
};

export default App;
