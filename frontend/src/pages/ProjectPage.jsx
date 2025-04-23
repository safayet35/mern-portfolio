import { useGetProjects } from "../hooks/useProjects.js";
import { PiSpinnerGapBold } from "react-icons/pi";
import Projects from "../components/Projects.jsx";
const ProjectPage = () => {
  const { data, isPending, isError, error } = useGetProjects();

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
    <div>
      {isPending ? (
        <div className="h-screen w-full flex items-center justify-center">
          <PiSpinnerGapBold className="animate-spin text-4xl" />
        </div>
      ) : (
        <div
          className="relative w-full min-h-screen md:pt-20 pt-28 pb-20 font-medium md:px-0 px-5 pb-20 md:pb-5
		overflow-x-hidden grid md:grid-cols-2 gap-9"
        >
          {data.data.map(elm => {
            return (
              <div className="" key={elm._id}>
                <Projects
                  title={elm.title}
                  description={elm.description}
                  projectType={elm.projectType}
                  coverImage={elm.coverImage}
                  projectLink={elm.projectLink}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
