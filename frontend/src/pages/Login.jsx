import { useState } from "react";
import useLogin from "../hooks/useLogin.js";
import { Navigate } from "react-router-dom";
import { PiSpinnerGapBold } from "react-icons/pi";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const [adminInfo, setAdminInfo] = useState({
    email: "",
    password: ""
  });

  const { mutate: login, isPending, isSuccess } = useLogin();
  const { isAuthentiCated, setToken } = useAuth();
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setAdminInfo(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    login(adminInfo, {
      onSuccess: data => {
        setAdminInfo({ email: "", password: "" });
        setToken(data?.data?.accessToken);
      }
    });
  };

  if (isAuthentiCated) return <Navigate to="/dashboard" />;
  return (
    <div
      className="flex  gap-4 items-center justify-center flex-col relative
			min-h-screen  font-medium md:px-32 px-10 p-20 md:py-32
		overflow-x-hidden md:px-4"
    >
      <h1 className="text-3xl text-center font-title">
        This page only for admin
      </h1>

      <p className="text-textColor text-center">
        if you are not admin please leave this page
      </p>

      <form
        onSubmit={e => handleSubmit(e)}
        className="flex items-center justify-center rounded-2xl flex-col gap-4
			px-8 py-8 bg-darkBackground w-full"
      >
        <h3 className="text-4xl font-title">Login</h3>
        <div className="w-full flex flex-col gap-2">
          <p className="text-2xl">Email</p>
          <input
            onChange={e => handleChange(e)}
            value={adminInfo.email}
            className="w-full py-4 px-4 rounded-[10px] w-full bg-transparent outline-none border-[1px] border-[#52525254]"
            type="email"
            required={true}
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-2xl">Password</p>
          <input
            onChange={e => handleChange(e)}
            value={adminInfo.password}
            className="w-full py-4 px-4 rounded-[10px] w-full bg-transparent outline-none border-[1px] border-[#52525254]"
            type="password"
            name="password"
            required={true}
            placeholder="Enter your password"
          />
        </div>
        <button
          className="flex items-center justify-center gap-2 w-full mt-5 py-2 text-[16px] rounded-md bg-buttonBackground border-[.1px]
				border-borderColor"
          type="submit"
        >
          <p>Submit</p>{" "}
          {isPending ? <PiSpinnerGapBold className="animate-spin" /> : null}
        </button>
      </form>
    </div>
  );
};
export default Login;
