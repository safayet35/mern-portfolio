import { RxCross1 } from "react-icons/rx";
import { useUpdateFeed } from "../hooks/useFeed.js";
const Popup = ({
  showPopup,
  setShowPopup,
  defaultData,
  setDefaultData,
  id
}) => {
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setDefaultData(prev => {
      return { ...prev, [name]: value };
    });
  };

  const { mutate, isPending, isError, data } = useUpdateFeed();

  const handleSubmit = e => {
    e.preventDefault();

    mutate(
      { id, credentials: defaultData },
      {
        onSuccess: () => {
          setShowPopup("hidden");
        }
      }
    );
  };

  return (
    <div
      className={`${showPopup} absolute transition-all inset-0 my-auto mx-auto w-fit h-fit px-10 py-8 bg-darkBackground rounded-3xl
      border-borderColor border-2`}
    >
      <button
        onClick={() => setShowPopup("hidden")}
        className="absolute bg-gray-300 rounded-full p-2 -right-2 -top-2 text-black"
      >
        <RxCross1 />
      </button>
      <h1 className=" mb-2 text-center font-title text-3xl">Edit</h1>
      <form
        onSubmit={e => handleSubmit(e)}
        className="w-full flex gap-3 flex-col justify-center"
      >
        <input
          onChange={e => handleChange(e)}
          value={defaultData.title}
          className="py-2 px-4 rounded-[10px] w-full bg-transparent outline-none border-[1px] border-[#52525254]"
          type="text"
          name="title"
          placeholder="Title"
          required
        />
        <textarea
          onChange={e => handleChange(e)}
          value={defaultData.description}
          className="h-32 resize-none py-2 px-4 rounded-[10px] w-full bg-transparent outline-none border-[1px] border-[#52525254]"
          type="text"
          name="description"
          placeholder="Description"
        />
        <button
          className="w-full mt-2 py-1 text-[16px] rounded-md bg-buttonBackground border-[.1px]
				border-borderColor"
          type="submit"
        >
           {isPending ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default Popup;
