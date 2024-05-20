import logo from "/assets/logo.svg";
import moon from "/assets/icon-moon.svg";
import avatar from "/assets/image-avatar.jpg";
import sun from "/assets/icon-sun.svg";

import { useContext } from "react";
import { InvoiceContext } from "../App";

export default function Header() {
  const { setIsDarkMode, isDarkMode } = useContext(InvoiceContext);

  return (
    <div className="flex justify-between pr-[24px] items-center w-full h-[72px] bg-[#373B53] dark:bg-[#1E2139] md:h-[80px] xl:flex-col xl:h-[100vh] xl:w-[103px] xl:pr-[0px] xl:pb-[24px] xl:rounded-r-[20px] xl:fixed">
      <div className="w-[72px] h-full bg-[#7C5DFA] flex justify-center items-center rounded-r-[20px] md:w-[80px] xl:w-full xl:h-[103px]">
        <img
          src={logo}
          alt="logo"
          className="md:w-[31px] md:h-[29px] xl:w-[40px] xl:h-[40px]"
        />
      </div>
      <div className="flex items-center gap-[24px] md:gap-[32px] xl:flex-col xl:gap-[24px]">
        <div
          className="w-[20px] h-[20px] cursor-pointer
"
        >
          {!isDarkMode ? (
            <img
              src={moon}
              alt="moon"
              className="w-full h-full xl:cursor-pointer"
              onClick={() => setIsDarkMode(true)}
            />
          ) : (
            <img
              src={sun}
              alt="sun"
              className="w-full h-full xl:cursor-pointer"
              onClick={() => setIsDarkMode(false)}
            />
          )}
        </div>

        <div className="border border-[#494E6E] w-[1px] h-[72px] xl:w-[103px] xl:h-[1px]"></div>

        <div className="w-[32px] h-[32px] xl:w-[40px] xl:h-[40px]">
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
