
import Home from "./components/pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import SignUp from "./components/pages/register/SignUp";
import React, { useEffect, useState } from "react";
// import ErrorPage from "./components/pages/ErrorPage";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"





function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://blog-sitapp.herokuapp.com/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }


  return (
    <Router>
      <TopBar user={user} onLogout={handleLogout}/>
      <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/write" element={<Write />} />
       <Route path="/login" element={<Login />} />
       <Route path="/login" element={handleLogin} />
       <Route path="/register" element={<SignUp />} />
       <Route path="/single" element={<Single />} />
       <Route path="/settings" element={<Settings />} />
       <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Router>

  );
}

export default App;

