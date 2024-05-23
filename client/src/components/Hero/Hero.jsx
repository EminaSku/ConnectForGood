import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Connecting Hearts, <br />
              Transforming Lives
              <br /> 
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Join hands with compassionate individuals dedicated to making a positive impact.</span>
            <span>Together, we can create a brighter future for our communities.</span>
          </div>

          

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={7900} end={8023} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Registered Volunteer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1650} end={1800} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Successful Event</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Countries</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./i.jpeg" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
