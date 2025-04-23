import { useState, useEffect } from "react";
import Button from "../components/Button.jsx";
import { MdOutlineEmail } from "react-icons/md";
import BlurText from "../animations/BlurText.jsx";
import { PiSpinnerGapBold } from "react-icons/pi";
import useContact from "../hooks/useContact.js";
const Contact = () => {
  const [isTextCopy, setTextCopy] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { mutate, isPending, isSuccess, data } = useContact();

  const handleCopyEmail = () => {
    const email = "sf.safayet35@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setTextCopy(true);
      })
      .catch(err => {
        console.error("Failed to copy email: ", err);
      });
    setTextCopy(true);
  };

  useEffect(() => {
    const interval = setInterval(function () {
      setTextCopy(false);
    }, 1000);

    return () => clearInterval(interval);
  }, [isTextCopy]);

  const handleContact = e => {
    const name = e.target.name;
    setContactInfo(prev => {
      return { ...prev, [name]: e.target.value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    mutate(contactInfo,{
       onSuccess:()=>{
          setContactInfo({ name: "", email: "", message: "" });
       }
    });
    
  };
  return (
    <div
      className="relative min-h-screen md:pt-20 pt-28 font-medium md:px-0 px-5 pb-20 md:pb-5
		overflow-x-hidden md:px-4"
    >
      <h1 className="my-4 font-title text-4xl">Contact</h1>

      <BlurText
        text="I’m always looking to collaborate on interesting projects with great
				people. Need a supportive hand? I have two!."
        delay={100}
        animateBy="words"
        direction="top"
        className="text-textColor mt-3 mb-10"
      />

      <Button
        onClick={e => handleCopyEmail(e)}
        style={
          "text-[14px] rounded-md bg-buttonBackground border-[.1px]	border-borderColor"
        }
      >
        <span className="flex items-center gap-2">
          <MdOutlineEmail className="text-[17px]" />
          {isTextCopy ? "Copied !!" : "Email"}
        </span>
      </Button>

      <form
        onSubmit={e => handleSubmit(e)}
        className="mt-10 rounded-lg px-5 py-6 bg-darkBackground min-h-fit w-full"
      >
        <h3>Send a message</h3>
        <p className="text-textColor">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <div className="mt-8 md:flex-row flex flex-col gap-2 ">
          <div className="w-full md:h-1/2 flex flex-col gap-2">
            <p>Name</p>
            <input
              onChange={e => handleContact(e)}
              value={contactInfo.name}
              className="py-2 px-4 rounded-[10px] w-full bg-transparent outline-none border-[1px] border-[#52525254]"
              type="text"
              name="name"
              required={true}
              placeholder="Enter your name"
            />
          </div>
          <div className="w-full md:h-1/2 flex flex-col gap-2">
            <p>Email</p>
            <input
              onChange={e => handleContact(e)}
              value={contactInfo.email}
              className="py-2 px-4 rounded-[10px] w-full bg-transparent outline-none border-[1px] border-[#52525254]"
              type="text"
              name="email"
              required={true}
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="mt-6">
          <h2>Message</h2>
          <textarea
            value={contactInfo.message}
            onChange={e => handleContact(e)}
            className="bg-transparent outline-none rounded-2xl border-[1px]
						border-[#52525254] px-4 py-2 h-28 resize-none w-full"
            name="message"
          ></textarea>
        </div>
        <button
          className="w-full mt-5 py-2 text-[16px] rounded-md bg-buttonBackground border-[.1px]
				border-borderColor flex gap-1 items-center justify-center"
          type="submit"
        >
          <p>Submit</p>{" "}
          {isPending ? <PiSpinnerGapBold className="animate-spin" /> : null}
        </button>
      </form>
    </div>
  );
};

export default Contact;
