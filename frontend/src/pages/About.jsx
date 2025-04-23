
import { GiFruitBowl } from "react-icons/gi";
import SpotLightCard from "../components/SpotLightCard.jsx";
import { IoLayersOutline } from "react-icons/io5";
import BlurText from "../animations/BlurText.jsx";
const About = () => {
  return (
    <div
      className="relative min-h-screen md:pt-20 pt-28 font-medium md:px-0 px-5 pb-20 md:pb-5
		overflow-x-hidden md:px-4"
    >
      <h1 className="font-title text-4xl">About me</h1>

      <p className="text-textColor mt-3 mb-10">
        Hi, I am Safayet, a passionate
        <span className="text-white font-[400]"> full-stack developer </span>
        based in <span className="text-white font-[400]">Bangladesh</span>. I
        started my journey in 2022 and have been dedicated to creating
        functional and visually appealing websites. I am constantly learning new
        technologies to enhance my skills and provide better solutions for my
        clients.
      </p>

      <ul className="flex flex-col gap-8">
        <li>
          <span className="text-[20px] block">Background</span>
          <span className="text-textColor">
            I've been involved in web development since 2022, focusing on
            full-stack development and DevOps. I am currently learning Next js.
          </span>
        </li>
        <li>
          <span className="text-[20px] block">Skills</span>
          <span className="text-textColor">
            Monogdb, Express, React, Nodejs, TypeScript, Git,.
          </span>
        </li>
        <li>
          <span className="text-[20px] block">Interests</span>
          <span className="text-textColor">
            Exploring new tech, Web3, DevOps, and AI.
          </span>
        </li>
        <li>
          <span className="text-[20px] block">Hobbies</span>
          <span className="text-textColor">
            playing football, Gaming, and traveling.
          </span>
        </li>
      </ul>
      <div className="my-7 grid gap-9 md:grid-cols-2">
        <SpotLightCard
          logo={<GiFruitBowl />}
          title="Services"
          description="Explore my diverse projects in web development and beyond."
          buttonValue="View Services"
          buttonLink="/service"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        />
        <SpotLightCard
          logo={<IoLayersOutline />}
          title="Stack"
          description="Dive into my stack."
          buttonValue="Stack"
          buttonLink="/stack"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        />
      </div>
    </div>
  );
};

export default About;
