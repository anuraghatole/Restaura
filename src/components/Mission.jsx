import React from "react";
import mission from "../assets/mission.mp4";
import missionn from "../assets/mission.jpeg";
import { MISSION } from "../constants";

const Mission = () => {
  return (
    <section className="" id="mission">
      <div className=" container mx-auto text-center">
        <h2 className=" text-3xl lg:text-4xl tracking-tighter  mb-8">
          Our Mission
        </h2>
        <div className=" relative flex items-center justify-center">
          <video
            src={mission}
            muted
            loop
            autoPlay
            playsInline
            poster={missionn}
            className=" w-full rounded-3xl  "
          ></video>
          <div className=" absolute h-full w-full rounded-3xl bg-black/40 flex items-center justify-center">
            <p className=" absolute max-w-lg tracking-tighter lg:text-3xl">
              {MISSION}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
