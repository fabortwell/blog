
// import {Link} from "react-router-dom";
// import "./login.css"

// const Login = () => {
//   return (
//     <div className="login">
//         <span className="loginTitle">Login</span>
//          <form className="loginForm">
//             <label>Email</label> 
//             <input type="text" className="loginInput" placeholder="Enter your email..."/>
//             <label>Passowrd</label> 
//             <input type="password" className="loginInput" placeholder="Enter your password..."/>
//         <button className="loginButton">Login</button>
//          </form>
//          <button className="loginRegisterButton">
//            <Link className="link"  to="/register">Register</Link>
//            </button>
//     </div>
//   )
// }

// export default Login


import {Link} from "react-router-dom";
import { useState } from "react";
import "./login.css"


function Login({ onLogin }) {
 const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        }
      });
    }
  

  return (
    <div className="login">
        <span className="loginTitle">Login</span>
         <form onSubmit={handleSubmit} className="loginForm">
            <label>Username</label> 
            <input 
            type="text" 
            id="username"
            value={username}
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            className="loginInput" 
            placeholder="Enter your username..."/>
            
            <label htmlFor="password">Passowrd</label> 
            <input 
            type="password" 
            className="loginInput" 
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password..."/>
        <button className="loginButton" type="submit">Login</button>
         </form>
         <button className="loginRegisterButton">
           <Link className="link"  to="/register">Register</Link>
           </button>
    </div>
  )
}

export default Login
