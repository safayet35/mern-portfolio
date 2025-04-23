import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { FaGithub, FaReact } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import StackBox from "../components/StackBox.jsx";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Stack = () => {
  const stackRef = useRef();

  useGSAP(() => {
    const element = stackRef.current;

    gsap.to(element, {
      x: 400,
      duration: 1
    });
  }, []);

  return (
    <div
      className="relative min-h-screen md:pt-20 pt-28 font-medium md:px-0 px-5 pb-20 md:pb-5
		overflow-x-hidden md:px-4"
    >
      <h1 className="font-title text-4xl">Stack</h1>
      <p className="text-textColor mt-3 mb-10">
        Tools, resources and software I use daily.
      </p>
      <div className="flex flex-col gap-4 py-4 px-4 border-[.5px] border-[#95959560]">
        <h1 className="my-4 font-title text-3xl">Development</h1>
        <StackBox
          logo={<IoLogoNodejs />}
          ref={stackRef}
          title="Nodejs"
          paragraph="Javascript runtime evironment"
          styles="text-green-500"
        />
        <StackBox
          logo={<SiExpress />}
          title="ExpressJs"
          paragraph="Javascript Framework"
        />
        <StackBox
          logo={<FaReact />}
          title="ReactJs"
          paragraph="Javascript Library"
          styles="text-sky-500"
        />
        <StackBox
          logo={<SiMongodb />}
          title="MongoDb"
          paragraph="Relational Database"
          styles="text-green-800"
        />
        <StackBox
          logo={<FaGithub />}
          title="Git"
          paragraph="Version Control System"
        />
        <StackBox
          logo={<SiTailwindcss />}
          title="TailwindCss"
          paragraph="Css Framework"
          styles="text-sky-400"
        />
        <StackBox
          logo={<VscVscodeInsiders />}
          title="Vscode"
          paragraph="Code Editor"
          styles="text-blue-500"
        />
      </div>
    </div>
  );
};

export default Stack;
