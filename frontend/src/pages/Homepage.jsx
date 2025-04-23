import { MdOutlineEmail } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GoPencil } from "react-icons/go";
import latestProjects from "../api/latestProjects.json";
import SpotlightCard from "../components/SpotLightCard.jsx";
import ChatBot from "../components/ChatBot.jsx";
import Projects from "../components/Projects.jsx";
// import LatestProjectCards from "../components/LatestProjectCards.jsx";
import Orb from "../animations/Orb.jsx";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Button.jsx";

import NavigationBar from "../components/NavigationBar.jsx";
import { RiRobot2Line } from "react-icons/ri";
import BlurText from "../animations/BlurText.jsx";

const Homepage = () => {
  const [isTextCopy, setTextCopy] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const handleCopyEmail = () => {
    const email = "sf.safayet35@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setTextCopy(true);
      })
      .catch(err => {
        console.error("Failed to copy email: ", err);
      });
    setTextCopy(true);
  };

  useEffect(() => {
    const interval = setInterval(function () {
      setTextCopy(false);
    }, 1000);

    return () => clearInterval(interval);
  }, [isTextCopy]);

  const handleClick = () => {
    setShowChatBot(prev => !prev);
  };

  return (
    //main wrapper div
    <div
      className=" relative min-h-screen md:pt-20 pt-28 font-medium md:px-0 px-5 pb-20 md:pb-5
		overflow-x-hidden md:flex"
    >
      {showChatBot ? (
        <ChatBot setShowChatBot={setShowChatBot} />
      ) : (
        <div
          onClick={handleClick}
          className=" z-20 flex items-center justify-center p-2 fixed right-3 bottom-20 md:bottom-4"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0
            }}
          >
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>

          <div className=" bg-darkBackground text-textColor p-3 rounded-full text-3xl">
            <RiRobot2Line />
          </div>
        </div>
      )}
      {/*----content header----*/}
      <div className=" md:flex md:flex-col md:px-5">
        <header className="flex flex-col gap-6 ">
          <h1 className="text-4xl leading-10">
            Hey, I'm Safayet, A Full-Stack
            <span className="text-textColor"> Developer.</span>
          </h1>

          <BlurText
            text="Passionate developer with a knack for creating dynamic web applications, exploring cutting-edge technologies, and engaging in outdoor adventures."
            delay={100}
            animateBy="words"
            direction="top"
            className="text-textColor font-title font-[400]"
          />

          {/*----div for two buttons ----*/}
          <div className="flex gap-4">
            <NavLink to="/about">
              <Button
                style={
                  "text-[14px] rounded-md bg-buttonBackground border-[.1px]	border-borderColor"
                }
              >
                About
              </Button>
            </NavLink>

            <Button
              onClick={handleCopyEmail}
              padding={"px-2"}
              style={
                "text-[14px] rounded-md bg-darkBackground border-[.1px]		border-borderColor text-textColor"
              }
            >
              <span className="flex items-center gap-2">
                <MdOutlineEmail className="text-[17px]" />
                {isTextCopy ? "Copied !!" : "Email"}
              </span>
            </Button>
          </div>
        </header>

        <div className="z-10">
          <h2 className="my-7 text-[20px] font-roboto font-semibold">
            New Drops
          </h2>
          {/*---- grid div for latest projects ----*/}
          <div className="grid gap-9 md:grid-cols-2">
            {latestProjects.map(elm => {
              return (
                <div key={elm.id}>
                  <Projects
                    title={elm.title}
                    description={elm.description}
                    projectType={elm.projectType}
                    coverImage={elm.coverImage}
                    projectLink={elm.projectLink}
                  />
                </div>
              );
            })}
          </div>
          {/*---- cobtainer div for project and feed projects ----*/}
          <div className="my-7 grid gap-9 md:grid-cols-2">
            <SpotlightCard
              logo={<GrProjects />}
              title="Feed"
              description="Dive into my quick
				thoughts."
              buttonValue="View feed"
              buttonLink="/feed"
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            ></SpotlightCard>

            <SpotlightCard
              logo={<GoPencil />}
              title="Projects"
              description="Explore my diverse projects in web development and beyond."
              buttonValue="Projects"
              buttonLink="/projects"
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            ></SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
