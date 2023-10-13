import React from "react";
import Image from "next/image";

function RightSection(props) {
  return (
    <section className="flex flex-col justify-center items-center bg-patten relative bg-[#F7F7F7] w-[45%] h-screen text-center">
      <img
        src="/assets/login/Group-5453.png"
        alt="Logo's"
        className="w-3/4 h-3/4"
      />
    </section>
  );
}

export default RightSection;
