import SpotLightCard from "../components/SpotLightCard.jsx";
import { GiFruitBowl } from "react-icons/gi";
import { IoLayersOutline } from "react-icons/io5";
const Experience = () => {
  return (
    <div
      className="relative min-h-screen md:pt-20 pt-28 font-medium md:px-0 px-5 pb-20 md:pb-5
		overflow-x-hidden md:px-4"
    >
      <h1 className="font-title text-4xl">Experience</h1>
      <p className="text-textColor mt-3 mb-10">
        A, and As a passionate learner of the MERN stack since 2022, I have been
        dedicated to mastering full-stack web development. During this time, I
        have worked on personal projects and collaborative efforts to enhance my
        skills in:key achievements.
      </p>
      <h2 className="text-[20px] font-title">Frontend Development</h2>
      <p className="text-textColor mt-1 mb-10">
        I specialize in building responsive and visually appealing user
        interfaces using:
      </p>
      <ul className="flex flex-col gap-8">
        <li>
          <span className="text-[20px] block">React.js</span>
          <span className="text-textColor">
            Leveraging the power of React to build reusable components and
            manage application state efficiently, ensuring high performance and
            scalability.
          </span>
        </li>
        <li>
          <span className="text-[20px] block">Tailwind CSS</span>
          <span className="text-textColor">
            Utilizing this utility-first CSS framework to design sleek and fully
            responsive layouts with ease, minimizing development time without
            compromising quality. modern, and scalable styles.
          </span>
        </li>
        <li>
          <span className="text-[20px] block">
            GSAP (GreenSock Animation Platform)
          </span>
          <span className="text-textColor">
            Crafting smooth and engaging animations to make interfaces come
            alive, delivering a rich and interactive user experience.
          </span>
        </li>
        <li>
          <span className="text-[20px] block">JavaScript (ES6+)</span>
          <span className="text-textColor">
            Writing clean, efficient code to handle interactivity, DOM
            manipulation, and asynchronous operations seamlessly.
          </span>
        </li>
        <li>
          <span className="text-[20px] block">Axios</span>
          <span className="text-textColor">
            Simplifying HTTP requests to integrate frontend and backend
            functionalities.s operations seamlessly.
          </span>
        </li>
        <li>
          <span className="text-[20px] block">Responsive Design</span>
          <span className="text-textColor">
            Ensuring all applications are fully optimized for various devices
            and screen sizes through best practices and responsive frameworks.
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

export default Experience;
