import React, { useContext } from 'react';
import LoginLayout from '../Component/LoginLayout';
import swal from 'sweetalert';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { loginWithPass, loading, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();


    const HandleLogin = (e) => {
      e.preventDefault();
  
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
  
      loginWithPass(email, password)
        .then((userCredential) => {
            setLoading(false)
            navigate("/allusers");
          swal("Good job!", "Logged in successfully!", "success");
         
        })
        .catch((error) => {
            setLoading(false)
          swal("Opps!", error.message, "error");
        });
    };
  
  
    return (
        <LoginLayout HandleLogin={HandleLogin} loading={loading}/>
    );
};

export default Login;