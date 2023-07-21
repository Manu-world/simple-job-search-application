import React from "react";

const Detail = ({
  company,
  logo,
  postedAt,
  contract,
  location,
  position,
  logoBackground,
  website,
  apply,
  description,
  requirements, //content and items inside
  role,
}) => {
  const [dark, darkSet] = React.useState(false);
  return (
    <div className="bg-black">
      <div
        className={` bg-[#5964E0] min-w-full h-28 sm:rounded-bl-[56px] relative flex flex-col items-center mb-32 text-[#19202D] bg-[url("src/assets/desktop/bg-pattern-header.svg")] bg-cover bg-center`}
      >
        <div className={`w-[80%] flex justify-between items-end mt-5`}>
          <p className={`font-black text-xl text-white`}>devjobs</p>
          <div className="flex justify-center items-center gap-2">
            {/* icon */}
            <img src="src\assets\desktop\icon-sun.svg" alt="sun icon" />
            <div
              onClick={() => darkSet((prev) => !prev)}
              className={`w-8 h-4 bg-white rounded-full flex items-center ${
                dark ? "justify-end" : "justify-start"
              } `}
            >
              <div
                className={`m-1 w-2 h-2 rounded-full bg-blue-500 hover:bg-blue-400`}
              ></div>
            </div>
            {/* icon */}
            <img src="src\assets\desktop\icon-moon.svg" alt="moon icon" />
          </div>
        </div>

        {/* details  */}
        <div className="absolute top-20 sm:w-[50%] w-[90%] sm:h-24 h-52 bg-white flex rounded-[10px] sm:rounded-none">
          <div
            style={{ background: logoBackground }}
            className="sm:w-[20%] sm:h-full w-14 h-14 bg-blue-500 flex justify-center items-center sm:relative sm:top-0 sm:left-0 absolute -top-7 left-[40%] rounded-[10px] sm:rounded-none"
          >
            {company}
          </div>
          <div className="w-full sm:w-[80%] flex flex-col sm:flex-row justify-evenly items-center p-5">
            <div className="">
              <p>{"company"}</p>
              <p>{`${company}.com`}</p>
            </div>
            <button className="bg-violet-200 text-violet-500 px-4 py-2 rounded">
              Company Site
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center mt-52 sm:mt-0 
      "
      >
        <div className="p-10 w-[90%] sm:w-[50%] bg-white rounded-[10px] sm:rounded-none">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center">
            <div>
              <p className={`text-[#9DAEC2]`}>{`${postedAt} . ${contract}`}</p>
              <p
                className={`text-xl font-black ${
                  dark ? "text-white" : "text-[hsl(214,17%,51%)]"
                }`}
              >
                {"Senior software Engineer"}
              </p>
              <p className={`text-[#5964E0] sm:mt-4`}>{"Location"}</p>
            </div>
            <button className="text-violet-200 bg-violet-700 px-4 py-2 rounded mt-10 sm:mt-0 w-full sm:w-fit">
              Apply Now
            </button>
          </div>
          {/* first paragraph */}
          <div className="">
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              blanditiis iure, omnis dolores pariatur ab necessitatibus sapiente
              enim. Libero, sint rem! Deleniti dolorum beatae soluta deserunt
              nulla, nemo maxime! Dolore! Praesentium itaque dolor rerum
              provident officia quisquam laboriosam facere minus neque,
              delectus, a suscipit! Tempora libero blanditiis eaque et
              laudantium illo voluptatem nisi labore alias ipsa! Nemo
              consequuntur totam optio! Quaerat adipisci atque voluptatum veniam
              qui doloribus! Quo quaerat neque, est quos a ipsa asperiores
              nostrum impedit sit at voluptatum, repellat voluptates delectus
              modi laborum illum ut libero debitis ullam. Natus quidem similique
            </p>
            <p className="mt-5">{"Requirement"}</p>
            <p className="mt-5">
              enim. Libero, sint rem! Deleniti dolorum beatae soluta deserunt
              nulla, nemo maxime! Dolore! Praesentium itaque dolor rerum
              provident officia quisquam laboriosam facere minus neque,
              delectus, a suscipit! Tempora libero blanditiis eaque et
              laudantium illo voluptatem nisi labore alias ipsa! Nemo
              consequuntur totam optio! Quaerat adipisci atque voluptatum veniam
            </p>
            <ul className="mt-5">
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </li>
            </ul>
            <p className="mt-5">{"what you will do"}</p>
            <p className="mt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, quod consectetur quidem perspiciatis, aut aliquam odio
              ea quibusdam in, iusto repellat quae provident incidunt ipsum
              beatae ex sequi culpa suscipit.
            </p>
            <ul className="mt-5">
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="w-full bg-white h-20 flex justify-center mt-20">
        <div className="w-[90%] sm:w-[50%] flex justify-between items-center ">
          <div className="hidden sm:block">
            <p>{"Senior Software Engineer"}</p>
            <p>{"So Digital Inc."}</p>
          </div>

          <button className="text-violet-200 bg-violet-700 px-4 py-2 rounded w-full sm:w-fit">
            Apply Now
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Detail;
