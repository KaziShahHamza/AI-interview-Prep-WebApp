import React, { useState } from "react";
import HERO_IMG from "./../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};

  return (
    <div className="w-full min-h-full bg-[#FFFCEF]">
      <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0" />
      <div className="container relative z-10 px-4 pt-6 mx-auto">
        <header className="flex items-center justify-between mb-16">
          <div className="text-xl font-bold text-black">InterviewPrep AI</div>
          <button
            className="bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer"
            onClick={() => setOpenAuthModal(true)}
          >
            Login / SignUp
          </button>
        </header>
      </div>

      <div className="container flex flex-col items-center px-4 pt-6 mx-auto md:flex-row">
        <div className="w-full pr-4 mb-8 md:w-1/2 md:mb-0">
          <div className="flex items-center mb-2 justify-left">
            <div className="flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              AI Powered
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-medium leading-tight text-black">
            Ace Interviews With <br />
            <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
              AI-Powered
            </span>{" "}
            Learning
          </h1>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-[17px] text-gray-900 mr-0 md:mr-20 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            ipsum eligendi a reprehenderit ratione, repellendus aspernatur
            beatae possimus iure, pariatur placeat ut harum nobis suscipit in
            nesciunt omnis libero sapiente.
          </p>
          <button
            className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-300 hover:border-yellow-300 transition-colors cursor-pointer"
            onClick={handleCTA}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
