import { useState } from "react";
import { useLogout } from "../hooks/useLogout.js";
import DashboardSetupBox from "../components/DashboardSetupBox.jsx";
import { Link } from "react-router-dom";
import { MdDriveFolderUpload } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { GoProjectSymlink } from "react-icons/go";
import { TiMessage } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";

const Dashboard = () => {
  const { mutate } = useLogout();

  const handleLogout = () => {
    console.log("first");
    mutate();
  };

  return (
    <div
      className="relative flex flex-col items-center
			min-h-screen font-medium md:px-0 px-6 p-20 md:py-32
		overflow-x-hidden md:px-4"
    >
      <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-black">
        <div className="px-10 bg-[#4e4e4e7f] absolute -bottom-1 left-0 text-4xl">
          <label htmlFor="file-upload" className="custom-file-upload">
            <MdDriveFolderUpload />
            <input className="upload-input" id="file-upload" type="file" />
          </label>
        </div>
        <img
          className="h-full w-full"
          src="../../public/assets/safuonsky.jpg"
          alt="profile"
        />
      </div>
      <h2 className=" m-2 text-2xl font-title">Safayet Rahman</h2>

      <div className="gap-4 rounded-3xl p-4 grid grid-cols-3 grid-rows-1 justify-center items-center w-full bg-darkBackground">
        <Link to="/dashboard/feedposts">
          <DashboardSetupBox
            logo={
              <FaRegNewspaper
                className="text-5xl
				text-red-500"
              />
            }
            text="Feed posts"
          />
        </Link>

        <Link to="/dashboard/messages">
          <DashboardSetupBox
            logo={
              <TiMessage
                className="text-5xl
				text-green-500"
              />
            }
            text="Messages"
          />
        </Link>

        <Link to="/dashboard/projects">
          <DashboardSetupBox
            logo={
              <GoProjectSymlink
                className="text-5xl
				text-orange-500"
              />
            }
            text="Manage projects"
          />
        </Link>
        <Link to="/dashboard/profile-update">
          <DashboardSetupBox
            logo={
              <IoSettingsOutline
                className="text-5xl
				text-purple-500"
              />
            }
            text="Profile update"
          />
        </Link>
      </div>

      <button
        className="rounded-3xl mt-5 text-white text-[18px] w-full py-2 bg-red-600 font-title "
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
