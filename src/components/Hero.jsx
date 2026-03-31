import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiSpringboot,
  SiMysql,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";
import logoBrand from "../assets/gw_logo.png";
import WordReveal from "./WordReveal";
import Magnetic from "./Magnetic";
import "./Hero.css";

const TechLogos = () => (
  <>
    <div className="slide">
      <SiReact size={30} color="#61DAFB" />
      <span>React</span>
    </div>
    <div className="slide">
      <SiNodedotjs size={30} color="#339933" />
      <span>Node.js</span>
    </div>
    <div className="slide">
      <SiNextdotjs size={30} color="#fff" />
      <span>Next.js</span>
    </div>
    <div className="slide">
      <SiMongodb size={30} color="#47A248" />
      <span>MongoDB</span>
    </div>
    <div className="slide">
      <SiSpringboot size={30} color="#6DB33F" />
      <span>Spring Boot</span>
    </div>
    <div className="slide">
      <SiMysql size={30} color="#4479A1" />
      <span>MySQL</span>
    </div>
    <div className="slide">
      <SiFirebase size={30} color="#FFCA28" />
      <span>Firebase</span>
    </div>
    <div className="slide">
      <SiSupabase size={30} color="#3ECF8E" />
      <span>Supabase</span>
    </div>
  </>
);

const Hero = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  return (
    <section id="hero" className="hero-section" onMouseMove={handleMouseMove}>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      <div className="hero-grid-bg"></div>
      <div
        className="hero-interactive-blob"
        style={{
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
        }}
      ></div>
      <div className="container hero-container">
        <div className="hero-content">
          <Magnetic strength={0.2}>
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <img src={logoBrand} alt="Driewing" className="badge-logo" />
              <span className="badge-text" style={{ fontWeight: "600" }}>
                Driewing
              </span>
            </motion.div>
          </Magnetic>

          <WordReveal
            text="Digital solutions crafted for scale and impact"
            className="hero-title"
            delay={0.2}
          />

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We partner with forward-thinking brands to build high-performance
            web experiences. From React development to strategic SEO, we
            transform your vision into digital excellence.
          </motion.p>
          <motion.div
            className="hero-btns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={200}
            >
              <Magnetic strength={0.3}>
                <button className="btn-primary">Book a Call</button>
              </Magnetic>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="hero-slider-container">
        <div className="hero-slide-track">
          <div className="slide-group">
            <TechLogos />
          </div>
          <div className="slide-group">
            <TechLogos />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
