import React from "react";

export default function Modal({
  locationValue,
  setLocationValue,
  fullTimeOnly,
  setFullTimeOnly,
  showModal,
  handleClose,
  onSearch,
  dark,
}) {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 h-full w-full bg-black opacity-40"
              onClick={() => handleClose()}
            ></div>
            <div className="flex min-h-screen items-center px-4 py-8">
              <div
                className={`relative mx-auto w-full max-w-lg rounded-md dark:bg-black ${
                  dark ? "bg-black dark:bg-white" : "bg-white"
                } p-4 shadow-lg`}
              >
                <div className="flex gap-5 py-5">
                  <img src="assets\desktop\icon-location.svg" />
                  <input
                    type="text"
                    name="location"
                    placeholder="Filter by location..."
                    onChange={(e) => setLocationValue(e.target.value)}
                    className={`focus:outline-none dark:bg-[#19202D] ${
                      dark ? "bg-[#19202D] dark:bg-white" : "bg-white"
                    } ${
                      dark ? "text-white dark:text-gray-500" : "text-gray-500"
                    } rounded-sm dark:text-white`}
                  />
                </div>
                <hr />
                <div
                  className={`flex gap-5 py-10 text-lg font-bold dark:text-white ${
                    dark ? "text-white dark:text-black" : "text-black"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="check"
                    checked={fullTimeOnly}
                    onChange={(e) => setFullTimeOnly(e.target.checked)}
                    className={``}
                  />
                  <p>Full Time Only</p>
                </div>
                <button
                  className="w-full rounded-md bg-blue-500 py-5 text-lg text-white"
                  onClick={() => {
                    onSearch("", locationValue, fullTimeOnly);
                    handleClose();
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
