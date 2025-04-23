const StackBox = ({ logo, title, paragraph,styles }) => {
	return (
		<div className="flex w-full items-center gap-2 ">
			<div className={`${styles} rounded-lg p-2 text-4xl bg-darkBackground`}>
				{logo}
			</div>
			<div>
				<h2>{title}</h2>
				<p className="text-textColor">{paragraph}</p>
			</div>
		</div>
	);
};
export default StackBox;
