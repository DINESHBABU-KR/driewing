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
  SiPhp,
  SiLaravel,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";
import logoBrand from "../assets/brand_logo.png";
import heroImg from "../assets/hero-agency.png";
import WordReveal from "./WordReveal";
import Magnetic from "./Magnetic";
import { PopupModal } from "react-calendly";
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
      <SiPhp size={30} color="#777BB4" />
      <span>PHP</span>
    </div>
    <div className="slide">
      <SiLaravel size={30} color="#FF2D20" />
      <span>Laravel</span>
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
  const [isCalendlyOpen, setIsCalendlyOpen] = React.useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  React.useEffect(() => {
    if (isCalendlyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCalendlyOpen]);

  return (
    <section id="hero" className="hero-section" onMouseMove={handleMouseMove}>
      <div className="hero-noise-overlay"></div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      <div className="hero-grid-bg"></div>

      {/* Floating Elements */}
      <motion.div
        className="floating-shape shape-1"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="floating-shape shape-2"
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="floating-shape shape-3"
        animate={{ y: [0, -15, 0], x: [0, 20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div
        className="hero-interactive-blob"
        style={{
          transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
        }}
      ></div>
      <div className="container hero-container">
        <div className="hero-text-side">
          <div className="hero-title-container">
            <h1 className="hero-title">
              Driewing <span className="highlight">Technologies</span>
            </h1>
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Turning ideas into scalable digital products.
            <br />
            <strong>Web • Mobile • Blockchain • SEO</strong>
          </motion.p>

          <motion.div
            className="service-tags"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="service-tag">Web Apps</span>
            <span className="service-tag">Mobile Apps</span>
            <span className="service-tag">Cloud Architecture</span>
            <span className="service-tag">UI/UX Design</span>
            <span className="service-tag">SEO Strategy</span>
          </motion.div>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Magnetic strength={0.3}>
              <button
                className="btn-primary"
                onClick={() => setIsCalendlyOpen(true)}
              >
                Book a Call
              </button>
            </Magnetic>
          </motion.div>
        </div>

        <div className="hero-image-side">
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          >
            <div className="image-glow"></div>
            <img
              src={heroImg}
              alt="Agency Innovation"
              className="hero-main-img"
            />

            {/* Decorative Elements */}
            <motion.div
              className="tech-badge react"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SiReact color="#61DAFB" />
            </motion.div>
            <motion.div
              className="tech-badge node"
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <SiNodedotjs color="#339933" />
            </motion.div>
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

      <PopupModal
        url="https://calendly.com/driewingtech"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")}
      />
    </section>
  );
};

export default Hero;
