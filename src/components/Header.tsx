import logo from "/assets/logo.svg";
import moon from "/assets/icon-moon.svg";
import avatar from "/assets/image-avatar.jpg";
import { useContext } from "react";
import { InvoiceContext } from "../App";

export default function Header() {
  const { setIsDarkMode } = useContext(InvoiceContext);

  return (
    <div className="flex justify-between pr-[24px] items-center w-[375px] h-[72px] bg-[#373B53]">
      <div className="w-[72px] h-full bg-[#7C5DFA] flex justify-center items-center rounded-r-[20px]">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <img
          src={moon}
          alt="moon"
          className="w-[20px] h-[20px]"
          onClick={() => setIsDarkMode((dark) => !dark)}
        />
        <img
          src={avatar}
          alt="avatar"
          className="w-[32px] h-[32px] rounded-full"
        />
      </div>
    </div>
  );
}
