import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterLayout = ({HandleSignup,registerLoading}) => {
  const [showName, setShowName] = useState({});


  return (
    <div className="flex py-10 items-center justify-center bg-softpurple/20 p-6 ">
      <div className="bg-softpurple flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%]">
        {/* register design side  */}
        <div className="relative hidden h-screen items-center justify-center bg-softpurple md:flex md:w-[60%] lg:w-[40%]">
          <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#7294f2] to-[#365ece]"></div>
          <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#7294f2] to-[#365ece]"></div>
          <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#7294f2] to-[#365ece] transition-all"></div>
          <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#7294f2] to-[#365ece]"></div>
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-medium text-white/80 ">Welcome </h2>
            <p className="animate-pulse text-sm text-white/60">
              Please Enter Your Information
            </p>
          </div>
        </div>
        {/* input side  */}
        <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
          <h2 className="pb-8 text-center text-3xl font-bold text-softpurple px-5">
            Register Here
          </h2>
          <form
            onSubmit={HandleSignup}
            className="flex  w-full flex-col items-center justify-center gap-4"
          >
            <input
              className="w-[80%] rounded-lg border border-softpurple px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="w-[80%] rounded-lg border border-softpurple px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              className="w-[80%] rounded-lg border border-softpurple px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <label
              className="flex h-full w-[80%] md:w-[60%] items-center gap-4 rounded-md bg-softpurple px-6 py-2 text-white active:ring-4 active:ring-cyan-200"
              htmlFor="file"
            >
              <svg
                width={20}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="Complete">
                    <g id="upload">
                      <g>
                        <path
                          d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
                          fill="none"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></path>
                        <g>
                          <polyline
                            data-name="Right"
                            fill="none"
                            id="Right-2"
                            points="7.9 6.7 12 2.7 16.1 6.7"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></polyline>
                          <line
                            fill="none"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="12"
                            x2="12"
                            y1="16.3"
                            y2="4.8"
                          ></line>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="text-lg font-medium">
                {" "}
                {showName.name ? showName.name : "Upload"}
              </p>
            </label>
            <input
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const imageFile = e.target.files[0];
                  setShowName(imageFile);
                }
              }}
              className="hidden"
              id="file"
              type="file"
              name="photo"
              accept="image/*"
              required
            />
            <p className="text-[14px] text-gray-400 px-5 text-center">
              Already have an account ?{" "}
              <Link to={'/login'} className="text-[#8EA7E9] ">Login </Link>
            </p>
            <button className="w-[80%] rounded-lg hover:bg-white hover:text-softpurple border hover:border-softpurple transition duration-300 bg-softpurple px-6 py-2 font-medium text-white md:w-[60%]">
              {registerLoading? 'Submitting..' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
