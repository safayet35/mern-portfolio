import { Link } from "react-router-dom";
const Projects = ({
  title,
  description,
  projectType,
  coverImage,
  projectLink
}) => {
  
  return (
    <div
      className="border-[.1px] border-borderColor overflow-hidden rounded-2xl flex flex-col w-full bg-darkBackground
    h-fit"
    >
      <Link to={projectLink} target="_blank">
        <img
          src={coverImage.replace("http://", "https://")}
          alt={title}
          className="w-full"
        />
        <div className="p-5 flex items-center justify-between">
          <div>
            <h2 className="font-roboto text-[20px]">{title}</h2>
            <h3 className="pr-5 text-textColor my-1">
              {description.length > 50
                ? description.slice(0, 50) + "...."
                : description}
            </h3>
          </div>
          <p className="font-roboto">{projectType}</p>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
