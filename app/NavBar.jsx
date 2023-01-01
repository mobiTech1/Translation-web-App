"use client";
import NavItem from "./Link";
import Modal from "./modal";
import { useRef } from "react";
import MenuItem from "./MenuItem";
export default function NavBar() {
  const navContainer = useRef(null);
  const menu = useRef(null);

  const handleMenuToggle = (event) => {
    event.preventDefault();
    const elements = navContainer.current.querySelectorAll(".navItem");
    elements.forEach((el) => {
      el.classList.toggle("md:hidden");
    });
    menu.current.classList.toggle("md:rounded-sm");
  };
  return (
    <>
      <Modal />
      <nav
        ref={navContainer}
        className="bg-gray-900 md:bg-inherit text-white h-screen px-10 my-auto py-6  flex flex-col text-center
                        md:w-[100%] md:h-16 md:mt-3 md:py-2 md:rounded-sm group"
      >
        <NavItem
          content={"How it works! "}
          className={"hidden md:block group-first:first:rounded-t-md"}
          handleClick={handleMenuToggle}
        />
        <MenuItem
          content={"Menu"}
          handleClick={handleMenuToggle}
          reference={menu}
        />
        <NavItem href={"/"} content={"Translation site"} />
        <NavItem href={"/"} content={"Get in Touch"} />
        <NavItem href={"/"} content={"Learn More"} />
        <NavItem
          href={"/#about"}
          content={"About"}
          className={"group-last:last:rounded-b-md"}
        />
      </nav>
    </>
  );
}
