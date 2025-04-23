import FeedPost from "../components/FeedPost.jsx";
import Popup from "../components/Popup.jsx";
import { PiSpinnerGapBold } from "react-icons/pi";

import { useGetFeed } from "../hooks/useFeed.js";
import { useState } from "react";

const Feed = () => {
  const { isPending, isError, error, data } = useGetFeed();
  const [defaultData, setDefaultData] = useState({
    title: "",
    description: ""
  });
  const [showPopup, setShowPopup] = useState("hidden");
  const [id, setId] = useState(null);
  const getInfoFromChild = (title, description, id) => {
    setDefaultData(prev => {
      return { ...prev, title, description };
    });
    setId(id);
  };

  if (isError) {
    
    return (
      <div
        className="relative min-h-screen md:pt-16 pt-28 font-medium md:px-0 px-5 pb-20 md:pb-5
		overflow-x-hidden md:px-4"
      >
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen md:pt-16 pt-28 font-medium md:px-0 px-5 pb-20 md:pb-5
		overflow-x-hidden md:px-4"
    >
      <Popup
        defaultData={defaultData}
        setDefaultData={setDefaultData}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        id={id}
      />
      <h1 className="font-title text-2xl">Feed</h1>
      <p className="text-textColor text-sm mt-2 mb-6">
        Discover, and stay updated through small content bites.
      </p>
      {isPending ? (
        <div className=" w-full flex items-center justify-center">
          <PiSpinnerGapBold className="animate-spin text-4xl" />
        </div>
      ) : (
        data.data.map(elem => {
          return (
            <div key={elem._id} className="all-post py-2 flex flex-col">
              <FeedPost
                date={elem.createdAt}
                title={elem.title}
                description={elem.description}
                id={elem._id}
                setShowPopup={setShowPopup}
                getInfoFromChild={getInfoFromChild}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Feed;
