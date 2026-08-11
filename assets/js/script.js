'use strict';


/**
 * navbar toggle
 */

import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Your styling for .active, .overlay, etc.

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle nav + overlay
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  // Scroll listener for header + back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "active" : ""}`}>
        <button className="nav-toggler" onClick={toggleNav}>
          ☰
        </button>
        <nav className={`navbar ${navActive ? "active" : ""}`}>
          <ul>
            {["Home", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={"#" + item.toLowerCase()}
                  onClick={() => setNavActive(false)}
                  className="nav-link"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div
        className={`overlay ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      ></div>

      <button className={`back-top-btn ${scrolled ? "active" : ""}`}>
        ↑
      </button>
    </>
  );
};

export default Navbar;
