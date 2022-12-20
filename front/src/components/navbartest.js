import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const getUserInfoFromLocalStorage = () => {
//   console.log("test");
//   return localStorage.getItem("userName")
//     ? localStorage.getItem("userName")
//     : "";
// };

const Navbar = ({ auth }) => {
  // const [user, setUser] = useState(getUserInfoFromLocalStorage());
  const [user, setUser] = useState("");
  //SessionTimeOut
  const [time, setTime] = useState(0);
  const [isMobile, setIsmobile] = useState(false);

  //* Session expire si on ne fait rien pendant 5 minutes
  const SessionTimeOut = () => {
    setTime(time + 1);
    console.log(time);
    if (time === 5) {
      localStorage.clear();
      window.location.reload();
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      SessionTimeOut();
    }, 300000);
    return () => clearInterval(interval);
  }, [time]);

  // //quand je me login j'enlève le bouton login et j'affiche le bouton logout
  // const [authButton, setAuthButton] = useState(false);

  // const AuthButton = () => {
  //   setAuthButton(true);
  // };

  let navigate = useNavigate(); // Use for Navigate on Previous

  const LogOut = () => {
    localStorage.removeItem("email"); // Remove Authenticated User
    localStorage.clear(); // Clear All Local Storage
    navigate(`/login`); // Navigate to Login Page
    setUser(auth.first_name("")); // Set User Name to Empty
  };

  useEffect(() => {
    let auth = localStorage.getItem("email");
    setUser(auth);
  }, []);

  return (
    <nav className="navbar">
      {/* <Link to="/">
          <img src={logo} alt="cokctail db logo" className="logo" />
        </Link> */}
      <h3 className="logo">Logo</h3>
      {/* <ul className={isMobile ? "nav-links show-nav" : "nav-links"}> */}
      <ul className="nav-links">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <li>
        <Link to="/login">Login</Link>
      </li>

      <button className="mobile-menu-icon">
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>

      {/* si l'utilisateur est connecté on affiche son userName et on retire notre login*/}
      {auth && (
        <span className="Logout">
          {/* Welcome: {SessionUsers} */}
          <div className="user">
            Welcome: {auth.first_name}
            <Link to="" onClick={LogOut}>
              Logout
            </Link>
          </div>
        </span>
      )}

      <div className="bar"></div>
    </nav>
  );
};

export default Navbar;
