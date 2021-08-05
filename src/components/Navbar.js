import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [buts, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // trying to close dropdown menu when in hamburger
  const [openDrop, setOpenDrop] = useState(false);
  const handleOpen = () => setOpenDrop(!openDrop);
  const closeDropMenu = () => setOpenDrop(false);

  // will activate hamburger menu when screen size is less than 960
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // makes sure sign up button doesn't show up in middle of page
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar ">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            planteronin
            {/* <i className="fab fa-typo3" /> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                ABOUT
              </Link>
            </li>

            {/* plant dropdown menu */}
            <div className={buts ? "dropdown" : "dropdown active"}>
              <button className="dropbtn">
                PLANTS{" "}
                <i className="fas fa-angle-down" onClick={handleOpen}></i>
              </button>
              <div
                className={
                  buts ? "dropdown-content" : "dropdown-content active"
                }
              >
                <Link
                  to="/current-plants"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  CURRENT PLANTS
                </Link>
                <Link
                  to="/wishlist-plants"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  WISHLIST PLANTS
                </Link>
              </div>
            </div>

            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                BLOG
              </Link>
            </li>

            {/* <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
