import React from 'react';
import { Authorizer } from '@authorizerdev/authorizer-react';
import './Login.css'
import { useNavigate,useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
 
  useEffect(() => {
    if (location.state && location.state.from === '/dashboard') {
      toast.success('Successfully logged out!');
    }
  }, [location]);
  return (
    <div>
   
      <div className='app'>
        <div className='form-container'>
        <h3>Login Page</h3>
        <Authorizer onLogin={() => { 
          navigate("/Dashboard",{ state: { from: '/login' } });
        }} 
        onSignup={()=>{
            navigate("/Home");
        }}
        onForgotPassword={()=>{
            navigate("/Home"); // Navigate to the "/login" page after logout)
        }}/>
      </div> 
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Login;
