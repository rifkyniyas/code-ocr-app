import { Icon } from "@iconify/react";
import React from "react";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-primary">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="font-bold leading-relaxed mr-4 my-2 whitespace-nowrap uppercase text-white
              flex justify-center items-center gap-x-2 border-b hover:border-b-white"
            href="/"
          >
            <Icon icon={"ph:code-simple-bold"} />
            <span>Code OCR App</span>
            <Icon icon={"ph:code-bold"} />
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Icon icon={`${navbarOpen ? "gg:close" : "ci:hamburger-md"}`} />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col gap-y-2 lg:flex-row lg:items-center list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-sm font-bold leading-snug 
                text-white hover:underline underline-offset-4 ml-2"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-sm font-bold leading-snug 
                text-white hover:underline underline-offset-4 ml-2"
                href="#feedback"
              >
                Feedback
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 mt-5 cursor-pointer rounded-md font-semibold 
                border-2 border-cta hover:border-transparent hover:bg-cta text-white ml-2"
                href="https://www.buymeacoffee.com/rifkyniyas"
                target="_blank"
              >
                Support My Work
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
