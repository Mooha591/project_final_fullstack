import React, { useEffect } from "react";
import { useState } from "react";
import image2 from "../image/image2.jpg";

const Home = () => {
  // darkmode localStorage state and function to set it to true or false
  //   const [darkMode, setDarkMode] = useState(
  //     localStorage.getItem("darkMode") === "true"
  //   );

  //   const handleDarkMode = () => {
  //     setDarkMode(!darkMode);
  //     localStorage.setItem("darkMode", !darkMode);
  //   };

  //   useEffect(() => {
  //     if (darkMode) {
  //       document.body.classList.add("dark-mode");
  //     } else {
  //       document.body.classList.remove("dark-mode");
  //     }
  //   }, [darkMode]);

  //   return (
  //     // <div className={darkMode ? "dark-mode" : "light-mode"}>
  //     <div className={darkMode ? "dark-mode" : "light-mode"}>
  //       <button onClick={handleDarkMode} className="dark-mode__toggle">
  //         {darkMode ? "Light Mode" : "Dark Mode"}
  //         {darkMode ? "🌞" : "🌚"}
  //       </button>
  //       <h1>Bienvenu dans la page d'accueil </h1>
  //     </div>
  //   );
  // };

  return (
    <>
      <div className="home_page">
        <h1 className="home_page_title">Bienvenu dans la page d'accueil </h1>
        <img className="image2" src={image2} alt="image2" />
      </div>
    </>
  );
};

export default Home;
