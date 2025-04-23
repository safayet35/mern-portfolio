import useMessage from "../../hooks/useMessage.js";
import { PiSpinnerGapBold } from "react-icons/pi";
const Messages = () => {
  const { data, isPending, isError } = useMessage();

  return (
    <div>
      {isPending ? (
        <div className="h-screen w-full flex items-center justify-center">
          <PiSpinnerGapBold className="animate-spin text-2xl" />
        </div>
      ) : (
        <div
          className="relative grid-rows-auto gap-3 grid md:grid-cols-2 lg:grid-cols-3
			min-h-screen font-medium md:px-0 px-6 p-20
		overflow-x-hidden md:px-4"
        >
          {data?.data.map((elem, i) => {
            return (
              <div key={i}>
                <SingleMessage
                  name={elem.name}
                  email={elem.email}
                  message={elem.message}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Messages;

const SingleMessage = ({ name, email, message }) => {
  return (
    <div className=" rounded-2xl bg-darkBackground h-fit px-3 py-4 flex flex-col gap-1">
      <h2 className="text-2xl">{name}</h2>
      <span className="text-[#696161]">{email}</span>
      <p className="text-textColor text-[10px]">{message}</p>
    </div>
  );
};
