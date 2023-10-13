import React from "react";
import "tailwindcss/tailwind.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export function LoginPage(props) {
  return (
    <div className="flex flex-row ">
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default LoginPage;
