import {Link} from "react-router-dom";
import "./topbar.css"


export default function TopBar({ user, onLogout }) {
    function handleLogout() {
      fetch("https://blog-sitapp.herokuapp.com/logout", {
        method: "DELETE",
      }).then(() => onLogout());
    }
 
  return (
    <div className="top">
    <div className="topLeft">
    <li className="topListItem"> 
            TECHY-CONVO
           </li>
    </div>
    <div className="topCenter">
        <ul className="topList">
         <li className="topListItem"> 
           <Link className="link" to="/home">HOME</Link>
           </li>
         <li className="topListItem">
         <Link className="link" to="/sidebar">ABOUT</Link>
         </li>
         <li className="topListItem">
         <Link className="link" to="/sidebar">CONTACT</Link>
         </li>
         <li className="topListItem">
         <Link className="link" to="/write">WRITE</Link>
         </li>
         <li className="topListItem">
         {/* <Link className="link" to="/login">LOGIN</Link>
         </li>
         <li className="topListItem">
         <Link className="link" to="/register">REGISTER</Link> */}
         </li>
        </ul>
        
      </div>
      <div className="topRight">
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        
        <div/>
      </div>
    </div>
  );
}
 
