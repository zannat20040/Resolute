import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Edit from "../Component/Edit";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  // const [allUsers, setAllUsers] = useState([]);
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const {
    data: allUsers,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const response = await axios.get(
        "http://localhost:5000/users"
      );
      return response.data;
    },
  });


  const HandleEdit=(data)=>{
    setOpenModal(true)
    setUserDetails(data)
  }

  return (
    <div className="overflow-x-auto px-4">
      <table className=" min-w-[90%] shadow-md mx-auto  my-6  relative">
        <thead>
          <tr className="bg-softpurple text-white">
            <th className="py-2 px-6 text-lg text-center border-b">Sl. No</th>
            <th className="py-2 px-6 text-lg text-center border-b">Image</th>
            <th className="py-2 px-6 text-lg text-center border-b">Name</th>
            <th className="py-2 px-6 text-lg border-b text-center">Email</th>
            <th className="py-2 px-6 text-lg border-b text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((users, index) => (
            <tr
              className="hover:bg-gray-100 border-b transition duration-300"
              key={users?._id}
            >
              <td className="py-2 px-6 border-b  font-medium text-center">
                {index + 1}
              </td>
              <td className="py-2 px-4 flex justify-center">
                <img
                  src={users?.photo}
                  alt="table navigate ui"
                  className="h-16 w-16 object-cover bg-gray-300 rounded-md"
                />
              </td>
              <td className="py-2 px-6 border-b  font-medium text-center">
                {users?.name}
              </td>
              <td className="py-2 px-6 border-b  font-medium text-center">
                {users?.email}
              </td>
              <td className="py-2 px-6 border-b text-center">
                {users?.email === user?.email ? (
                  <div className="w-72 mx-auto flex items-center justify-center">
                    <button
                      onClick={() => HandleEdit(users) }
                      className="hover:bg-white hover:text-softpurple border hover:border-softpurple transition duration-300 bg-softpurple text-white py-1 px-4 rounded-md"
                    >
                      Edit
                    </button>
                  </div>
                ) : (
                  <button
                    disabled
                    className=" bg-gray-400 text-white py-1 px-4 rounded-md"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openModal && (
        <div
          onClick={() => setOpenModal(false)}
          className={`fixed z-[100] flex items-center justify-center ${
            openModal ? "visible opacity-100" : "invisible opacity-0"
          } inset-0 bg-black/20 backdrop-blur-sm duration-100 overflow-auto`}
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className={` absolute  rounded-sm bg-white p-6 drop-shadow-lg  dark:text-white ${
              openModal
                ? "scale-1 opacity-1 duration-300"
                : "scale-0 opacity-0 duration-150"
            }`}
          >
            <Edit userDetails={userDetails} refetch={refetch}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
