import { GrUserAdmin } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = ({ style }) => {
  return (
    <>
      <nav
        className={`${style} 
			`}
      >
        <div className="md:flex-col md:w-16 flex gap-3 items-center md:gap-1 md:p-2">
          <Link to="/">
            <img
              className="md:w-9 md:h-9  w-11 h-11 rounded-full"
              src="../../public/assets/safuonsky.jpg"
              alt=""
            />
          </Link>
          <div className="font-title font-[500] flex flex-col">
            <h3 className="md:text-[12px] md:text-center">
              Safayet <span className="md:hidden">Rahman</span>
            </h3>
            <p className="line-clamp-1 md:text-center text-[12px] md:text-[10px] text-textColor">
              Full-stack developer
            </p>
          </div>
        </div>
        <div className="md:hidden p-2 font-bold rounded-lg text-2xl bg-buttonBackground">
          <Link to="/login">
            <GrUserAdmin />
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
