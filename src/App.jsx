import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import DisheshCard from "./components/DisheshCard";
import Dishesh from "./components/Dishesh";

const App = () => {
  return (
    <main className=" overflow-y-hidden text-neutral-200 antialiased">
      <Hero />
      <Dishesh />
    </main>
  );
};

export default App;
