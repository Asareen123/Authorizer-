import { useAuthorizer } from "@authorizerdev/authorizer-react";
import { BrowserRouter, useNavigate ,useLocation} from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState,useEffect } from "react";
export default function Dashboard() {
  const { user, loading, authorizerRef, setUser, setToken, token } = useAuthorizer();
  const navigate = useNavigate();
  const location = useLocation();
 
  useEffect(() => {
    if (location.state && location.state.from === '/login') {
      toast.success('Successfully logged in!');
    }
  }, [location]);
  const logout = async () => {
    await authorizerRef.logout();
    setUser(null);
    setToken(null);
    navigate("/login",{ state: { from: '/dashboard' } }); // Navigate to the "/login" page after logout

};

  return (
      <div>
        <h1>Token</h1>
        <pre> {JSON.stringify(token, null, 6)}</pre>
        <h1>User</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <button onClick={logout}>LOGOUT</button>
       <ToastContainer/>
      </div>
   
  );
}