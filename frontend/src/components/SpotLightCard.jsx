import { useRef, useState } from "react";
import Button from "./Button.jsx";
import { NavLink } from "react-router-dom";
const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  logo,
  title,
  description,
  buttonValue,
  buttonLink
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = e => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative z-0 md:z-0 rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
        }}
      />
      <div className="my-4 w-fit text-2xl bg-buttonBackground p-4  rounded-full">
        {logo}
      </div>
      <h2 className="leading-5 font-roboto text-[22px]">{title}</h2>
      <p className="text-textColor">{description}</p>
      <NavLink to={buttonLink}>
        <Button
          style={
            "text-[14px] rounded-md bg-buttonBackground font-roboto border-[.1px]	mt-6	border-borderColor"
          }
        >
          {buttonValue}
        </Button>
      </NavLink>
    </div>
  );
};

export default SpotlightCard;
