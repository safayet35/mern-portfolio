import Projects from "../../components/Projects.jsx";
import { PiSpinnerGapBold } from "react-icons/pi";
import { useState, useRef } from "react";
import {
  useGetProjects,
  useDeleteProjects,
  usePostProjects
} from "../../hooks/useProjects.js";

const DashboardProjects = () => {
  const [formData, setFormdata] = useState({
    title: "",
    description: "",
    projectType: "",
    coverImage: null,
    projectLink: ""
  });

  const { data, isPending, isError } = useGetProjects();
  const {
    mutate: postMutate,
    isPending: postPending,
    isSuccess: postSuccess
  } = usePostProjects();
  const {
    mutate,
    isPending: deletePending,
    isSuccess: deleteSuccess,
    data: deleteData,
    error: deleteError
  } = useDeleteProjects();
  const handleChange = e => {
    let value = e.target.value;
    let name = e.target.name;

    setFormdata(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleFileChange = e => {
    setFormdata(prev => {
      return { ...prev, coverImage: e.target.files[0] };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("coverImage", formData.coverImage);
    data.append("projectType", formData.projectType);
    data.append("projectLink", formData.projectLink);

    postMutate(data);

    setFormdata({
      title: "",
      description: "",
      projectType: "",
      coverImage: null,
      projectLink: ""
    });
  };

  const handleDeleteProject = id => {
    mutate(id);
  };

  return (
    <div className="min-h-screen w-full px-7 py-20 gap-6 flex flex-col">
      <form
        onSubmit={e => handleSubmit(e)}
        className="w-full flex flex-col gap-2"
      >
        <input
          onChange={e => handleChange(e)}
          className="py-2 px-4 rounded-[10px] w-full bg-transparent outline-none
          border-[1px] border-[#52525254]"
          type="text"
          name="title"
          placeholder="Title"
          required={true}
          value={formData.title}
        />
        <input
          onChange={e => handleChange(e)}
          className="py-2 px-4 rounded-[10px] w-full bg-transparent outline-none
          border-[1px] border-[#52525254]"
          type="text"
          name="description"
          placeholder="Description"
          required={true}
          value={formData.description}
        />
        <input
          onChange={e => handleChange(e)}
          className="py-2 px-4 rounded-[10px] w-full bg-transparent outline-none
          border-[1px] border-[#52525254]"
          type="text"
          name="projectType"
          placeholder="Type"
          required={true}
          value={formData.projectType}
        />
        <input
          onChange={e => handleChange(e)}
          className="py-2 px-4 rounded-[10px] w-full bg-transparent outline-none
          border-[1px] border-[#52525254]"
          type="text"
          name="projectLink"
          placeholder="Link"
          required={true}
          value={formData.projectLink}
        />
        <input
          onChange={e => handleFileChange(e)}
          className="py-2 px-4 rounded-[10px] w-full bg-transparent outline-none
          border-[1px] border-[#52525254]"
          type="file"
          name="coverImage"
          accept="image/*"
          required={true}
        />
        <button
          disabled={postPending}
          className="flex gap-1 items-center justify-center w-full mt-2 py-1 text-[16px] rounded-md bg-buttonBackground border-[.1px]
				border-borderColor"
          type="submit"
        >
          <p>Add project</p>
          {postPending ? (
            <PiSpinnerGapBold className="animate-spin text-[20px]" />
          ) : null}
        </button>
      </form>
      <div className=" apiForm w-full ">
        <div className="relative text-[8px] grid gap-3 md:grid-cols-2 ">
          {isPending ? (
            <div className="absolute w-full flex justify-center">
              <PiSpinnerGapBold className="animate-spin text-4xl" />
            </div>
          ) : (
            data.data.map(elm => {
              return (
                <div key={elm._id}>
                  <Projects
                    title={elm.title}
                    description={elm.description}
                    projectType={elm.projectType}
                    coverImage={elm.coverImage}
                    projectLink={elm.projectLink}
                  />
                  <button
                    disabled={deletePending}
                    onClick={() => handleDeleteProject(elm._id)}
                    className="flex gap-1 items-center justify-center px-6 my-4 py-2 font-semibold bg-red-600 rounded-md"
                  >
                    <p>Delete</p>
                    {deletePending ? (
                      <PiSpinnerGapBold className="animate-spin text-[15px]" />
                    ) : null}
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
export default DashboardProjects;
