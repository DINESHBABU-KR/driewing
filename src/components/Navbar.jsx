import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logoBrand from "../assets/brand_logo.png";
import Magnetic from "./Magnetic";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHidden(true); // scrolling down
        setClick(false); // close mobile menu if scrolling down
      } else {
        setHidden(false); // scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar-wrapper ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}
    >
      <div className="navbar">
        <div className="logo">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
            onClick={closeMenu}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          >
            <img src={logoBrand} alt="Driewing Logo" className="logo-img" />
            <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#fff', letterSpacing: '1px' }}>Driewing.</span>
          </Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} color="#fff" />
          ) : (
            <FaBars size={20} color="#fff" />
          )}
        </div>

        <motion.ul
          className={click ? "nav-menu active" : "nav-menu"}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {[
            { to: "services", label: "Services" },
            { to: "portfolio", label: "Work" },
            { to: "about", label: "About" },
            // { to: "team", label: "Team" },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="nav-item"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="nav-cta hide-mobile"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
          >
            <Magnetic strength={0.3}>
              <button
                className="btn-primary"
                style={{ padding: "10px 24px", fontSize: "0.9rem" }}
              >
                Book a Call
              </button>
            </Magnetic>
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
