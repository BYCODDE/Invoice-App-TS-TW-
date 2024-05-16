import logo from "/assets/logo.svg";

export default function Header() {
  return (
    <div className="w-[375px] h-[72px] bg-[#373B53]">
      <div className="w-[72px] h-full bg-[#7C5DFA] flex justify-center items-center rounded-r-[20px]">
        <img src={logo} alt="logo" />
      </div>
      <div></div>
    </div>
  );
}
