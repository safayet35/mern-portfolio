import { useState } from "react";
import { usePostFeed } from "../../hooks/useFeed.js";
const FeedPost = () => {
  const { mutate, isSuccess, status, isPending, isError, data } = usePostFeed();

  const [postData, setPostData] = useState({
    title: "",
    description: ""
  });

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setPostData(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    mutate(postData, {
      onSuccess: () => {
        setPostData({ title: "", description: "" });
      }
    });
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center 
			min-h-screen font-medium md:px-0 px-6 p-20 md:py-32
		overflow-x-hidden md:px-4"
    >
      <form
        onSubmit={e => handleSubmit(e)}
        className="w-full flex gap-3 flex-col justify-center"
      >
        <h1 className="text-center font-title text-3xl">Manage your feed</h1>
        <input
          onChange={e => handleChange(e)}
          value={postData.title}
          className="py-2 px-4 rounded-[10px] w-full bg-transparent outline-none border-[1px] border-[#52525254]"
          type="text"
          name="title"
          placeholder="Title"
          required
        />
        <input
          onChange={e => handleChange(e)}
          value={postData.description}
          className="py-2 px-4 rounded-[10px] w-full bg-transparent outline-none border-[1px] border-[#52525254]"
          type="text"
          name="description"
          placeholder="Description"
        />
        <button
          disabled={isPending}
          className="w-full mt-2 py-1 text-[16px] rounded-md bg-buttonBackground border-[.1px]
				border-borderColor"
          type="submit"
        >
          {isPending ? "Adding..." : "Add new post"}
        </button>
      </form>
    </div>
  );
};
export default FeedPost;
