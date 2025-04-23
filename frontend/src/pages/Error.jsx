import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
const Error = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center ">
			<div
				className="items-center justify-center flex gap-3
		bg-mainBackground"
			>
				<h1 className="text-textColor text-[150px] font-bold font-title">4</h1>
				<div
					className=" relative w-32 h-32 bg-white rounded-full border-4
			border-gray-400 flex items-center justify-center"
				>
					<div className=" bg-black eye-ball w-10 h-10 bg-black rounded-full"></div>
				</div>
				<h1 className="text-textColor text-[150px] font-bold font-title">4</h1>
			</div>
			<h2 className="text-4xl font-bold text-textColor">Page not found</h2>
			<Link className="mt-10" to="/">
				<div className=" text-2xl bg-buttonBackground p-3 rounded-2xl flex items-center justify-center gap-2">
					<IoArrowBack /> <p>Go to home</p>
				</div>
			</Link>
		</div>
	);
};

export default Error;
