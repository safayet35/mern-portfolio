import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useDeleteFeed } from "../hooks/useFeed.js";
const FeedPost = ({
  date,
  title,
  description,
  id,
  setShowPopup,
  getInfoFromChild
}) => {
  const [isLogged, setIsLogged] = useState(false);
  const { isAuthentiCated } = useAuth();
  const convertedDate = new Date(date).toLocaleString("en-GB", {
    timeZone: "Asia/Dhaka",
    hour12: true
  });

  const { mutate, isPending, data, isError } = useDeleteFeed();

  const handleEdit = (title, description, id) => {
    setShowPopup("block");
    getInfoFromChild(title, description,id);
  };

  return (
    <div className="flex flex-col gap-2 py-4 border-b-[.5px] border-[#95959560]">
      <p className="text-textColor font-title">{convertedDate}</p>
      <h2 className="text-[20px] md:text-2xl font-title">{title}</h2>
      <p className="text-textColor text-[14px]">{description}</p>
      {isAuthentiCated ? (
        <div className="py-2 flex gap-3 items-center">
          <button
            onClick={() => handleEdit(title, description, id)}
            className="rounded-lg bg-blue-400 px-6 py-2 font-bold"
          >
            Edit
          </button>
          <button
            onClick={() => mutate(id)}
            className="rounded-lg bg-red-600 px-6 py-2 font-bold"
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default FeedPost;
