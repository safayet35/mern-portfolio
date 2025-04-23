import NavigationBox from "./NavigationBox.jsx";
import { FaHome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { GiFruitBowl, GiToaster } from "react-icons/gi";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoLayersOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { CiTwitter, CiLinkedin, CiInstagram, CiFacebook } from "react-icons/ci";
import Navbar from "./Navbar.jsx";

const NavigationBar = () => {
	return (
		<div
			className="fixed z-50 bottom-0 w-full flex items-start bg-darkBackground
		overflow-x-auto md:top-0 md:h-screen md:w-fit md:overflow-y-auto
		md:flex-col"
		>
			<div className="hidden md:inline-block">
				<Navbar />
			</div>

			<NavigationBox logo={<FaHome />} text="Home" link="/" />
			<NavigationBox
				logo={<IoBagHandleOutline />}
				text="Experience"
				link="/experience"
			/>
			<NavigationBox logo={<GoPencil />} text="Projects" link="/projects" />
			<NavigationBox logo={<GiFruitBowl />} text="Services" link="/service" />
			<NavigationBox
				logo={<MdOutlineEmojiPeople />}
				text="About"
				link="/about"
			/>
			<NavigationBox logo={<GrProjects />} text="Feed" link="/feed" />
			<NavigationBox logo={<GiToaster />} text="Thoughts" link="/thoughts" />
			<NavigationBox logo={<IoLayersOutline />} text="Stack" link="/stack" />
			<NavigationBox logo={<FiPhoneCall />} text="Contact" link="/contact" />
			<NavigationBox
				logo={<CiTwitter />}
				text="Twitter"
				link="https://x.com/Safu35?s=09"
			/>
			<NavigationBox
				logo={<CiFacebook />}
				text="Facebook"
				link="https://www.facebook.com/share/1J4FsTHFb2/"
			/>
			<NavigationBox
				logo={<CiLinkedin />}
				text="Linkedin"
				link="https://www.linkedin.com/in/safayet-rahman-370a78275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
			/>
			<NavigationBox
				logo={<FaGithub />}
				text="Github"
				link="https://github.com/safayet35"
			/>
			<NavigationBox
				logo={<CiInstagram />}
				text="instagram"
				link="https://instagram.com/ig.safu"
			/>
		</div>
	);
};
export default NavigationBar;
