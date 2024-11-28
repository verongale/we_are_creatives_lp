import { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent p-6 flex items-center justify-between">
      {/* Logo */}
      <div>
        <p className="text-white font-extrabold text-2xl md:text-3xl leading-none">
          sunnyside
        </p>
      </div>
      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            width="24"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            className="block"
          >
            <path
              d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
              fill="#FFF"
            />
          </svg>
        </button>
      </div>
      {/* Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-[#3EBFFF] md:static md:bg-transparent md:flex md:space-x-6 md:w-auto`}
      >
        <ul className="text-white text-2xl flex flex-col items-center md:flex-row">
          <li className="cursor-pointer py-4 px-6 md:py-0">About</li>
          <li className="cursor-pointer py-4 px-6 md:py-0">Services</li>
          <li className="cursor-pointer py-4 px-6 md:py-0">Projects</li>
          <li className="cursor-pointer py-4 px-6 bg-slate-100 text-black rounded-full hover:bg-opacity-50 md:py-0">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
