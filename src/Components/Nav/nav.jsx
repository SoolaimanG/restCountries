import { useState } from "react";
import { useEffect } from "react";
import { HiMoon } from "react-icons/hi";
import "./nav.css";
import { BsSunFill } from "react-icons/bs";

function Nav() {
  const [mode, setMode] = useState(false);
  const toggleTheme = () => {
    if (mode == false) {
      document.documentElement.style.setProperty(
        "--Very-Dark-Bl",
        "hsl(0, 0%, 98%)"
      );
      document.documentElement.style.setProperty(
        "--Very-Light-Gray",
        "hsl(207, 26%, 17%)"
      );
      document.documentElement.style.setProperty(
        "--Dark-Blue",
        "hsl(0, 0%, 100%)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--Very-Dark-Bl",
        "hsl(200, 15%, 8%)"
      );
      document.documentElement.style.setProperty(
        "--Very-Light-Gray",
        "hsl(0, 0%, 98%)"
      );
      document.documentElement.style.setProperty(
        "--Dark-Blue",
        "hsl(209, 23%, 22%)"
      );
    }
  };
  console.log(mode);
  return (
    <nav>
      <div className="nav__one container">
        <h3>Where in the world?</h3>
        <div className="nav__two">
          {mode ? <HiMoon /> : <BsSunFill />}
          <h5
            onClick={() => {
              toggleTheme();
              setMode((prev) => !prev);
            }}
          >
            {mode ? "Dark Mode" : "Light Mode"}
          </h5>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
// else {
//   document.documentElement.style.setProperty(
//     "--Very-Light-Gray",
//     "hsl(200, 15%, 8%)"
//   );
