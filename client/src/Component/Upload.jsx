import React, { useRef, useState } from "react";

const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef();

  const handleClearFiles = () => {
    setSelectedFiles([]);
    fileInputRef.current.value = "";
  };

  return (
    <div>
      {selectedFiles.length > 0 ? (
        <div>
          {selectedFiles.map((file, index) => (
            <div key={index} className="flex items-center gap-x-6 mt-1">
              <img
                className="size-[100px] h-14 w-14 rounded object-cover"
                src={URL.createObjectURL(file)}
                alt={file.name}
              />
              <div className="flex-1 space-y-1.5 overflow-hidden">
                <h5 className="text-sm font-medium tracking-tight truncate">
                  {file.name}
                </h5>
                <p className="text-gray-500 text-sm">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>
          ))}
          <button
            className="bg-softpurple  text-white rounded mt-4 px-3 "
            onClick={handleClearFiles}
          >
            Clear Files
          </button>
        </div>
      ) : (
        <label
          className=" mx-auto flex w-full flex-col items-center justify-center space-y-3 rounded-lg border-2 border-dashed border-gray-400 p-6 bg-white"
          htmlFor="fileInput"
        >
          <svg
            width={50}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 42 32"
            enableBackground="new 0 0 42 32"
            xmlSpace="preserve"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path
                  fill="black"
                  d="M33.958,12.988C33.531,6.376,28.933,0,20.5,0C12.787,0,6.839,5.733,6.524,13.384 C2.304,14.697,0,19.213,0,22.5C0,27.561,4.206,32,9,32h6.5c0.276,0,0.5-0.224,0.5-0.5S15.776,31,15.5,31H9c-4.262,0-8-3.972-8-8.5 C1,19.449,3.674,14,9,14h1.5c0.276,0,0.5-0.224,0.5-0.5S10.776,13,10.5,13H9c-0.509,0-0.99,0.057-1.459,0.139 C7.933,7.149,12.486,1,20.5,1C29.088,1,33,7.739,33,14v1.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V14 c0-0.003,0-0.006,0-0.009c3.019,0.331,7,3.571,7,8.509c0,3.826-3.691,8.5-8,8.5h-7.5c-3.238,0-4.5-1.262-4.5-4.5V12.783l4.078,4.07 C25.176,16.951,25.304,17,25.432,17s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.513,0-0.707l-4.461-4.452 c-0.594-0.592-1.055-0.592-1.648,0l-4.461,4.452c-0.195,0.194-0.195,0.512,0,0.707s0.512,0.195,0.707,0L20,12.783V26.5 c0,3.804,1.696,5.5,5.5,5.5H33c4.847,0,9-5.224,9-9.5C42,17.333,37.777,13.292,33.958,12.988z"
                ></path>{" "}
              </g>
            </g>
          </svg>
          <div className="space-y-1.5 text-center">
            <h5 className="whitespace-nowrap text-lg font-medium tracking-tight ">
              Upload your file
            </h5>
            <p className="text-sm text-gray-500">
              File Should be in PNG, JPEG or JPG formate
            </p>
          </div>
          <input
            ref={fileInputRef}
            id="fileInput"
            type="file"
            multiple
            className="hidden"
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setSelectedFiles(files);
            }}
          />
        </label>
      )}
    </div>
  );
};

export default Upload;
