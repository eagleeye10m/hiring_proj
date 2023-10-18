import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Descriptions from "./ResponsiveSection/Descriptions";

export function LoginPage() {
  const [desComponent, showDesComponent] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 375) {
        showDesComponent(true);
      } else showDesComponent(false);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex flex-row phone:flex-col phone:items-end">
      <LeftSection />
      <RightSection />
      {desComponent && <Descriptions />}
    </section>
  );
}

export default LoginPage;
