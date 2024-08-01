import React from "react";
import Image from "next/image";

export const Intro = () => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        <img
          src="/robot-cv.jpeg"
          className="w-[40rem] my-20 rounded-full"
        ></img>
        <div className="flex items-center  ">
          <p className="w-[20vw]  text-2xl">
            Welcome to <b>RezumeAI!</b> Looking to make your job application
            stand out? You've come to the right place. Our AI-powered resume
            builder is designed to help you craft a professional, personalized
            resume in minutes. With our intelligent system, you can create a
            resume that highlights your unique skills, experiences, and
            achievements, giving you the best chance to impress employers and
            land your dream job.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="text"
          className="  m-8  w-[20rem]   bg-[#08d] box-border w-full text-[#eee] cursor-pointer text-lg h-[50px] text-center  mt-[38px] rounded-xl border-0 active:bg-[#06b] "
        >
          Unleash Your Potential !
        </button>
      </div>
    </>
  );
};
