import React from "react";
import styles from "../../styles/LoginStyles/rightSection/RightSection.module.scss";

function RightSection(props) {
  return (
    <React.Fragment>
      <section
        className={`${styles.rightSection} flex flex-col justify-center items-center bg-patten relative bg-[#F7F7F7] w-[45%] h-screen text-center `}
      >
        <img
          src="/assets/login/Group-5453.png"
          alt="Logo's"
          className={`${styles.logo} w-3/4 h-3/4 `}
        />

        <img src="/assets/login/bg.png" className={`${styles.line} hidden`} />
      </section>
    </React.Fragment>
  );
}

export default RightSection;
