import React from "react";
import video from "../assets/hero.mp4";
import hero from "../assets/hero.jpeg";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <>
      <section className="relative flex h-screen items-center justify-center  ">
        <div className=" absolute insert-0 -z-20 h-full w-full overflow-hidden">
          <video
            src={video}
            className=" h-full w-full object-cover"
            muted
            autoPlay
            loop
            playsInline
            poster={hero}
          ></video>
        </div>
        <div className=" relative z-20 flex h-screen flex-col justify-end pb-20">
          <img src={logo} className=" w-full p-4" alt="restaura" />
          <p className=" text-white p-4 text-lg tracking-tighter">Paris</p>
        </div>
      </section>
      ;
    </>
  );
};

export default Hero;
