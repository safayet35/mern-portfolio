const DashboardSetupBox = ({ logo, text, style }) => {
	return (
		<div
			className={`${style} rounded-2xl bg-buttonBackground flex flex-col items-center
				justify-center px-2 py-6`}
		>
			{logo}
			<h2 className=" font-title text-[10px] text-center">{text}</h2>
		</div>
	);
};
export default DashboardSetupBox;
