"use client";

import Image from "next/image";
import React from "react"; // useState
import { Toggle } from "../ui/toggle";
import { Button } from "../ui/button";
import { useSidebar } from "@/context/SidebarContext";

const NavBar = () => {
  const { isOpen, setIsOpen } = useSidebar();

  const handleHamClick = () => {
    console.log("clicked ham menu");
    setIsOpen(!isOpen);
  };

  return (
    <section className="sticky top-0 z-10 flex h-[80px] w-full items-center justify-between border-b bg-white px-5 ">
      <div className="flex items-center space-x-3">
        <Toggle>
          <Image
            src="../assets/icons/ham.svg"
            alt="ham-menu"
            width={20}
            height={20}
            style={{
              width: "auto",
              height: "20px",
            }}
            priority
            onClick={handleHamClick}
          />
        </Toggle>

        <Image
          src="../assets/icons/kayak-sm.svg"
          alt="kayak-big"
          // added ml-2 but I can do it more preciseily by space-x-* propety see above
          className="hidden max-sm:block"
          height={20}
          width={100}
          style={{
            width: "auto",
            height: "24px",
          }}
          priority
        />

        <Image
          src="../assets/icons/kayak-big.svg"
          alt="kayak-big"
          className="hidden min-[640px]:block"
          height={20}
          width={100}
          style={{
            width: "auto",
            height: "24px",
          }}
          priority
        />
      </div>

      <div className="flex items-center space-x-3">
        <Toggle>
          <Image
            src="../assets/icons/heart-filled.svg"
            alt="ham-menu"
            width={20}
            height={20}
            style={{
              width: "auto",
              height: "20px",
            }}
          />
        </Toggle>

        <Button
          variant="outline"
          className="hidden space-x-1 border-[0.5px] border-black min-[640px]:flex"
        >
          <Image
            src="../assets/icons/login-user-sm.svg"
            alt="login-user-sm"
            height={20}
            width={20}
          />
          <span className="py-4">Sign-In</span>
        </Button>

        <Image
          className="hidden cursor-pointer max-sm:block"
          src="../assets/icons/login-user-sm.svg"
          alt="login-user-sm"
          height={25}
          width={25}
        />
      </div>
    </section>
  );
};

export default NavBar;
