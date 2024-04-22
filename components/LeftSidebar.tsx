"use client";

import React from "react";
import { links } from "@/constants";
import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const LeftSidebar = () => {
  const currPath = usePathname();
  const { isOpen } = useSidebar();

  return (
    <div className={`h-screen max-w-[220px] ${isOpen ? "w-[220px]" : "w-min"} border-r p-2`}>
      <div className="flex flex-col">
        {links.map((link) => {
          const isActive =
            (currPath.includes(link.route) && link.route.length > 1) || currPath === link.route;

          return (
            <div key={link.id} className="">
              <Link
                href={link.route}
                className={`flex h-10 items-center space-x-3 rounded-sm px-2 hover:bg-gray ${isActive ? "bg-gray font-semibold" : ""} text-normal mb-1 text-primry-100`}
              >
                {isOpen ? (
                  <>
                    <Image
                      src={link.imgURL}
                      alt={link.route}
                      width={20}
                      height={20}
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    <p className="block">{link.label}</p>
                  </>
                ) : (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex w-5 justify-center">
                          <Image
                            src={link.imgURL}
                            alt={link.route}
                            width={20}
                            height={20}
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="relative top-8 ml-8">
                        <p>{link.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </Link>
              {link.hrLine && <hr className="my-1.5" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSidebar;
