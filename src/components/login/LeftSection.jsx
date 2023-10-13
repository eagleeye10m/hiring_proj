import React from "react";
//import classes from "./styles/LeftSection.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function LeftSection() {
  return (
    <section className="flex flex-col justify-center bg-white w-[55%] h-screen p-10">
      <div className="returnBtn absolute top-[40px] left-[70px] border border-1 border-gray-200 text-sm px-4 py-2 rounded-md">
        <FontAwesomeIcon icon={faArrowLeft} />
        <Link href="/" className="ml-2">
          برگشت به خانه
        </Link>
      </div>

      <div
        id="welcome"
        className="text-black mb-[40px]"
        style={{ direction: "rtl" }}
      >
        <title className="text-[32px] font-black  block">ورود به شیکاست</title>
        <span className="text-[12px] text-gray-500">به شیکاست خوش آمدید</span>
      </div>

      <div id="info" className="" style={{ direction: "rtl" }}>
        <label
          htmlFor="phoneNumer"
          className="text-gray-500 block text-[11px] mb-3 font-bold"
        >
          برای ورود و عضویت در سایت شماره موبایل خود را وارد کنید
        </label>
        <input
          id="phoneNumber"
          type="text"
          required
          maxLength="12"
          className="bg-neutral rounded-md p-3 text-[12px] text-black w-1/2 mb-6"
          placeholder="شماره موبایل"
        />

        <button className="block bg-[#ED2425] px-5 py-3 rounded-md text-[11px] text-white">
          ورود و عضویت
        </button>
      </div>
    </section>
  );
}

export default LeftSection;
