import React from "react";
import styles from "./Header.module.css";
const Hero: React.FC = () => {
  return (
    <>
      <div className="min-h-[400px] overflow-hidden ">
        <div className={styles.bgImg}></div>
        <div className="w-full text-white text-7xl text-center h-[500px] flex items-center justify-center absolute top-0 ">
          Compressed natural gas Automation System
        </div>
      </div>
    </>
  );
};

export default Hero;
