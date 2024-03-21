import { useContext, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";

const NavBar = () => {
  const { user, signOutProfile, setuser } = useContext(AuthContext);

  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  const HandleLogout = () => {
    signOutProfile()
      .then(() => {
        navigate("/login");
        swal("Good job!", "Logged out successfully!", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="shadow-md">
      <nav className="flex items-center justify-between  px-4 py-2  container mx-auto">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-2xl text-softpurple font-extrabold  transition-all duration-200 hover:scale-110">
          <h2>Hema</h2>
        </div>
        <div className="hidden md:flex items-center justify-between gap-16">
          <ul className="flex items-center justify-between gap-10">
            {user && (
              <>
                <NavLink
                  to={"/allusers"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-softpurple "
                      : ""
                  }
                >
                  <li className="group flex  cursor-pointer flex-col">
                    All Users{" "}
                    <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-softpurple transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </NavLink>
                <NavLink
                  to={"/createForm"}
                  activeClassName="active"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-softpurple "
                      : ""
                  }
                >
                  <li className="group flex  cursor-pointer flex-col">
                    Create Form{" "}
                    <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-softpurple transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </NavLink>
                <NavLink
                  to={"video"}
                  activeClassName="active"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-softpurple "
                      : ""
                  }
                >
                  <li className="group flex  cursor-pointer flex-col">
                    Video Chat{" "}
                    <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-softpurple transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </NavLink>
              </>
            )}
          </ul>
          <div className="flex items-center justify-between gap-5">
            {user ? (
              <button
                onClick={HandleLogout}
                className="rounded-full  bg-softpurple px-6 py-2 text-white transition-all duration-300 hover:scale-90"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link to={"/login"}>
                  <button className="rounded-full bg-softpurple px-6 py-2 text-white transition-all duration-300 hover:scale-90">
                    Log In
                  </button>
                </Link>
                <Link to={"/register"}>
                  <button className="rounded-full bg-softpurple px-6 py-2 text-white transition-all duration-300 hover:scale-90">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
        <div
          ref={dropDownMenuRef}
          onClick={() => setDropDownState(!dropDownState)}
          className="relative flex transition-transform md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            {" "}
            <line x1="4" x2="20" y1="12" y2="12" />{" "}
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />{" "}
          </svg>
          {dropDownState && (
            <div className=" z-10  gap-2  bg-white shadow p-5 absolute right-0 top-11 flex w-[200px] flex-col  rounded text-base ">
              <ul className="flex flex-col  gap-3 ">
                {user && (
                  <>
                    <NavLink
                      to={"/allusers"}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "border-b-2 border-softpurple "
                          : ""
                      }
                    >
                      <li className="group flex  cursor-pointer flex-col">
                        All Users{" "}
                        <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-softpurple transition-all duration-300 group-hover:w-full"></span>
                      </li>
                    </NavLink>
                    <NavLink
                      to={"/createForm"}
                      activeClassName="active"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "border-b-2 border-softpurple "
                          : ""
                      }
                    >
                      <li className="group flex  cursor-pointer flex-col">
                        Create Form{" "}
                        <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-softpurple transition-all duration-300 group-hover:w-full"></span>
                      </li>
                    </NavLink>
                    <NavLink
                      to={"video"}
                      activeClassName="active"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "border-b-2 border-softpurple "
                          : ""
                      }
                    >
                      <li className="group flex  cursor-pointer flex-col">
                        Video Chat{" "}
                        <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-softpurple transition-all duration-300 group-hover:w-full"></span>
                      </li>
                    </NavLink>
                  </>
                )}
              </ul>
              <div className="flex items-center justify-between gap-5">
                {user ? (
                  <button
                    onClick={HandleLogout}
                    className="rounded w-full bg-softpurple px-6 py-2 text-white transition-all duration-300 hover:scale-90"
                  >
                    Log Out
                  </button>
                ) : (
                  <>
                    <div className="flex-col flex w-full   gap-2">
                      <Link to={"/login"}>
                        <button className="rounded w-full bg-softpurple px-6 py-2 text-white transition-all duration-300 hover:scale-90">
                          Log In
                        </button>
                      </Link>
                      <Link to={"/register"}>
                        <button className="rounded w-full bg-softpurple px-6 py-2 text-white transition-all duration-300 hover:scale-90">
                          Register
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
