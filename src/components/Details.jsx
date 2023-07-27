import React from "react";
import { useLocation } from "react-router-dom";

const Detail = ({ dark }) => {
  const { state } = useLocation();
  return (
    <div className={`${dark ? "bg-black" : "bg-gray-200"}`}>
      <div className={` flex flex-col items-center justify-center`}>
        {/* details  */}
        <div
          className={`absolute top-20 flex h-52 w-[90%] rounded-[10px] ${
            dark ? "bg-[#19202D]" : "bg-white"
          } sm:h-24 sm:w-[50%] sm:rounded-none`}
        >
          <div
            style={{ background: state.logoBackground }}
            className="absolute -top-7 left-[43%] flex h-14 w-14 items-center justify-center rounded-[10px] bg-blue-500 sm:relative sm:left-0 sm:top-0 sm:h-full sm:w-[20%] sm:rounded-none"
          >
            <img src={state.logo} />
          </div>
          <div className="flex w-full flex-col items-center justify-evenly p-5 sm:w-[80%] sm:flex-row">
            <div className="flex flex-col items-center justify-center sm:block">
              <p className={`font-bold ${dark ? "text-white" : ""}`}>
                {state.company}
              </p>
              <p className="text-[#9DAEC2]">{`${state.company.toLowerCase()}.com`}</p>
            </div>
            <a
              href={state.website}
              className="rounded bg-violet-200 px-4 py-2 text-violet-500"
            >
              Company Site
            </a>
          </div>
        </div>
      </div>
      <div className="mt-36 flex flex-col items-center sm:mt-0">
        <div
          className={`w-[90%] rounded-[10px] ${
            dark ? "bg-[#19202D]" : "bg-white"
          } p-10 sm:w-[50%] sm:rounded-none`}
        >
          <div className="flex flex-col justify-between sm:flex-row sm:items-center">
            <div>
              <p
                className={`text-[#9DAEC2]`}
              >{`${state.postedAt} . ${state.contract}`}</p>
              <p
                className={`text-xl font-black ${
                  dark ? "text-white" : "text-[hsl(214,17%,51%)]"
                }`}
              >
                {state.position}
              </p>
              <p className={`text-[#5964E0] sm:mt-4`}>{state.location}</p>
            </div>
            <button className="mt-10 w-full rounded bg-violet-700 px-4 py-2 text-violet-200 sm:mt-0 sm:w-fit">
              Apply Now
            </button>
          </div>
          {/* first paragraph */}
          <div className="text-[#9DAEC2]">
            <p className="mt-5">{state.description}</p>
            <h1
              className={`mt-5 font-bold ${dark ? "text-white" : "text-black"}`}
            >
              Requirements
            </h1>
            <p className="mt-5">{state.requirements.content}</p>
            <div className="ml-5 mt-5">
              <ul className="list-disc">
                {state.requirements.items.map((e) => (
                  <li key={e} className="pl-5">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <p
              className={`mt-5 font-bold ${dark ? "text-white" : "text-black"}`}
            >
              What you will do
            </p>
            <p className="mt-5">{state.role.content}</p>
            <div className="ml-5 mt-5">
              <ul className="custom-list-style list-decimal">
                {state.role.items.map((e) => (
                  <li key={e} className="pl-5">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer
        className={`mt-20 flex h-20 w-full justify-center ${
          dark ? "bg-[#19202D]" : "bg-white"
        }`}
      >
        <div className="flex w-[90%] items-center justify-between sm:w-[50%] ">
          <div className="hidden sm:block">
            <p>{state.position}</p>
            <p>{"So Digital Inc."}</p>
          </div>

          <button className="w-full rounded bg-violet-700 px-4 py-2 text-violet-200 sm:w-fit">
            Apply Now
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Detail;
