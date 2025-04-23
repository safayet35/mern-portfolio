const Button = ({ children, style, padding,onClick }) => {
	return <button onClick={onClick} className={`${style} ${padding || "px-4 py-2"}`}>{children}</button>;
};
export default Button;
