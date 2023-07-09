import { useAuthorizer } from "@authorizerdev/authorizer-react";
import { Routes,Route ,Link} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
export default function Root(){
    const {user,loading,setToken,setUser,authorizerRef}=useAuthorizer();
    const onLogout=async()=>{
        await authorizerRef.logout();
        setToken(null);
        setUser(null);
    }
    if(loading){
        return <h1>LOADING..</h1>
    }
    return(
        <div> 
           
            <nav>
                {user ?<Link to ="/Dashboard"></Link>:(
                    <>
                    <Link to ="/Home">Home</Link> | <Link to="/login">Login</Link>
                    </>
                )}
            </nav>
            <Routes>
                {user ? (
                    <Route path="/Dashboard" element={<Dashboard/>}/>
                )
            :
        ( 
            <>
            <Route path="/Home" element={<Home/>}/>
            <Route path ="/login" element={<Login/>}></Route>
            <Route path ="/Dashboard" element={<Dashboard/>}/>
            </>
        )}
            </Routes>
        
        </div> 
    )
}
