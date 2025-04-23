import { NavLink } from "react-router-dom";
const NavigationBox = ({ logo, text, link }) => {
	return (
		<NavLink to={link}>
			<div
				className="h-16 px-5 text-textColor flex flex-col items-center
			justify-center md:px-0 md:w-16 md:text-[10px]
			"
			>
				<p className="md:text-2xl text-[20px]">{logo}</p>
				<p className="font-roboto text-[12px]">{text}</p>
			</div>
		</NavLink>
	);
};

export default NavigationBox;
