import React from "react";
import { DISHES } from "../constants";
import DisheshCard from "./DisheshCard";

const Dishesh = () => {
  return (
    <section className="container mx-auto py-16 " id="dishesh">
      <h2 className=" mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Dishesh
      </h2>
      <div className=" grid grid-cols-1 gap-8 md:grid-cols-5">
        {DISHES.map((project, index) => (
          <DisheshCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Dishesh;
