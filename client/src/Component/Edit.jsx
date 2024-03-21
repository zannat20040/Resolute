import React, { useContext, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { imgUpload } from "../Custom Hooks/imageUpload";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { updateProfile } from "firebase/auth";

const Edit = ({ userDetails, refetch }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  console.log(user)
  const HandleImageUpdate = async (event) => {
    const image = event.target.files[0];
    const photo = await imgUpload(image);
    await axios
      .patch(`http://localhost:5000/users/${userDetails?._id}`, {
        photo: photo,
      })
      .then((res) => {
        updateProfile(user, {
          photoURL: photo,
        })
          .then((res) => {
            refetch();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const HandleUpdateInfo = (event) => {
    event.preventDefault();
    setLoading(true)
    const form = event.target;
    const username = form.name.value;
    console.log(username)
    axios
      .patch(`http://localhost:5000/users/${userDetails?._id}`, {
        name: username,
      })
      .then((res) => {
        updateProfile(user, {
          displayName: username,
        })
          .then((res) => {
            refetch()
            console.log(res)
            setLoading(false)
          })
          .catch((error) => {
            console.log(error);
            setLoading(false)
          });
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
      });
  };

  return (
    <div className=" flex  flex-col md:flex-row  my-10 overflow-auto">
      <div className="relative max-w-[350px] group">
        <img
          className="rounded-lg transform scale-105"
          src={user?.photoURL}
          alt="card navigate ui"
        />
        <span>
          <label
            className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full bg-white bg-gradient-to-tr from-softpurple to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]"
            htmlFor="file"
          >
            <svg
              width={25}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <g strokeWidth="0"></g>{" "}
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>{" "}
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="style=linear">
                  {" "}
                  <g id="add">
                    {" "}
                    <path
                      id="vector"
                      d="M11.998 5.84424L11.998 18.1604"
                      stroke="#9EE6FD"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      id="vector_2"
                      d="M18.1561 12.002L5.83998 12.0019"
                      stroke="#9EE6FD"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </svg>
          </label>
          <input
            onChange={HandleImageUpdate}
            className="hidden"
            id="file"
            type="file"
            name="photo"
            accept="image/*"
            required
          />
        </span>
      </div>
      <div className="bg-white space-y-12  max-w-[350px] rounded-tr-lg rounded-br-lg md:w-[350px] text-center p-10 shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] flex flex-col justify-center ">
        <form
          className="flex w-full flex-col items-center  gap-2"
          onSubmit={HandleUpdateInfo}
        >
          <input
            className="w-full rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 "
            ttype="text"
            placeholder="Your Name"
            name="name"
            required
            defaultValue={user?.displayName}
          />
          <input
            className="w-full rounded-lg border border-gray-400 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 "
            type="email"
            placeholder="Your Email"
            name="email"
            disabled
            defaultValue={user?.email}
          />

          <button className=" rounded-lg hover:bg-white hover:text-softpurple border hover:border-softpurple transition duration-300 bg-softpurple px-6 py-2 font-medium text-white w-full">
            {loading? 'Updating...':"Update"}
          </button>
        </form>
    
      </div>
    </div>
  );
};

export default Edit;
