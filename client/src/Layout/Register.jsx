import React, { useContext, useState } from "react";
import RegisterLayout from "../Component/RegisterLayout";
import { imgUpload } from "../Custom Hooks/imageUpload";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createWithPass, loading, setLoading } = useContext(AuthContext);
  const [registerLoading, setRegisterLoading] = useState(false)
  const navigate = useNavigate();

  const HandleSignup = async (e) => {
    e.preventDefault();
    setRegisterLoading(true)

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.photo.files[0];
    const photo = await imgUpload(image);

    createWithPass(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userInfo = {
          email: email,
          name: name,
          photo: photo,
        };

        axios
          .post("https://resolute-server-rose.vercel.app/users", userInfo)
          .then((res) => {
            updateProfile(user, {
              displayName: name,
              photoURL: photo,
            })
              .then(() => {
                setRegisterLoading(false)
                navigate("/allusers");
                swal(
                  "Great!",
                  "Your account has been created successfully",
                  "success"
                );
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            setRegisterLoading(false)
            console.log(error);
          });
      })
      .catch((error) => {
        setRegisterLoading(false)
        swal("Opps!", error.message, "error");
      });
  };

  return <RegisterLayout HandleSignup={HandleSignup} registerLoading={registerLoading} />;
};

export default Register;
