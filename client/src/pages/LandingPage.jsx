import React, { useState } from "react";
import HERO_IMG from "./../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import Modal from "./Modal";

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};

  return (
    <>
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
                <LuSparkles /> AI Powered
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
            <p className="text-[19px] text-gray-900 mr-0 md:mr-20 mb-6">
              Level up your interview prep with intelligent, personalized
              training. Practice real-world questions, get instant feedback, and
              track your progress. Whether it’s tech, behavioral, or system
              design, our AI helps you succeed, faster and smarter.
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

      <div className="relative z-10 w-full min-h-full">
        <div>
          <section className="flex items-center justify-center p-1 mt-36 ">
            <span className="p-1 pb-1.5 bg-yellow-200  rounded-xl">
              <img
                src={HERO_IMG}
                alt="Hero Image"
                className="w-[80vw] rounded-lg "
              />
            </span>
          </section>
        </div>
      </div>

      <div className="w-full min-h-full bg-[#FFFCEF] mt-10 ">
        <div className="container px-4 pt-10 pb-20 mx-auto">
          <section className="mt-5">
            <h2 className="mb-12 text-3xl font-medium text-center">
              Features That Make You Shine
            </h2>
            <div className="flex flex-col items-center gap-8">
              <div className="grid w-full gird grid-cols-1 gap-8 md:grid-cols-3">
                {APP_FEATURES.slice(0, 3).map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-[#FFFEF8] p-6  rounded-xl shadow-xs hover:shadow-lg shadow-amber-200 transition border border-amber-200"
                  >
                    <h3 className="mb-3 text-base font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid w-full gird grid-cols-1 gap-8 md:grid-cols-2">
                {APP_FEATURES.slice(3).map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-[#FFFEF8] p-6  rounded-xl shadow-xs hover:shadow-lg shadow-amber-200 transition border border-amber-200"
                  >
                    <h3 className="mb-3 text-base font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
        title=""
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} /> 
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
