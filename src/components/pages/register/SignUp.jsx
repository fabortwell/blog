// import React, { useState } from "react";
// import "./signup.css"

// function SignUp({ setUser }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("http://localhost:3000/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username,
//         password,
//         password_confirmation: passwordConfirmation,
//       }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Sign Up</h1>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           autoComplete="off"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           autoComplete="current-password"
//         />
//         <label htmlFor="password">Password Confirmation</label>
//         <input
//           type="password"
//           id="password_confirmation"
//           value={passwordConfirmation}
//           onChange={(e) => setPasswordConfirmation(e.target.value)}
//           autoComplete="current-password"
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;






import React, { useState } from "react";
import {Link} from "react-router-dom";
import './signup.css'
function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
     <div className="register">
        <span className="registerTitle">Register</span>
         <form onSubmit={handleSubmit} className="registerForm">
          
           <label htmlFor="username">Username</label>
            <input type="text" 
            className="registerInput" 
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username..." 
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Enter password..." 
          />
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
            placeholder="confirm password..." 
          />
           <button className="registerButton">Register</button>
         </form>
         <button className="registerLoginButton">
           
           <Link className="link" to="/login">Login</Link>
         </button>
    </div>
    </div>
  );
}

export default SignUp;