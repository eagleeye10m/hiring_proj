import React from "react";
import styles from "../../../styles/LoginStyles/responsiveSection/Descriptions.module.css";

function descriptions() {
  return (
    <div>
      <ul className={`${styles.descriptions} `}>
        <li>
          <img src="/assets/login/Group 95.png" />
          تنوع بالای <br />
          <span>محصولات</span>
        </li>

        <li>
          <img src="/assets/login/Group 96.png" />
          بیش از یک هزار <br />
          <span>مشتری راضی</span>
        </li>
        <li>
          <img src="/assets/login/Group 97.png" />
          محصولات باکیفیت <br />
          <span> و اورجینال</span>
        </li>
        <li>
          <img src="/assets/login/Group 98.png" />
          بالای 10 سال تجربه <br />
          <span>فروش محصول</span>
        </li>
      </ul>
    </div>
  );
}

export default descriptions;
