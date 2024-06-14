import Link from "next/link";
import Image from "next/image";
import AnimalsDropdown from "./AnimalsDropdown";
import logo from "~/images/home/logo.jpg";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = {
  Animals: [
    { link: "Chickens", title: "Chickens" },
    { link: "Cows", title: "Cows" },
    { link: "Pigs", title: "Pigs" },
    { link: "Rabbits", title: "Rabbits" },
    { link: "Turkeys", title: "Turkeys" },
    { link: "Quail", title: "Quail" },
    { link: "Ducks", title: "Ducks" },
  ],
  Other: [
    { link: "Products", title: "Products" },
    { link: "Events", title: "Current Events" },
    { link: "Eggs", title: "Eggs" },
    { link: "Farmers", title: "Meet Your Farmers" },
    { link: "Contacts", title: "Contacts Us" },
  ],
};
export default function NavBar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimalsExpanded, setIsAnimalsExpanded] = useState(false);
  return (
    <div
      className="flex w-full"
      style={{
        backgroundImage: `url("/cov2.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100%",
        backgroundPosition: "bottom",
      }}
    >
      <div
        className={`sm:hidden ${isOpen ? "w-2/3" : "w-0"} absolute right-0 top-0 mt-[100px] flex h-1/3 flex-col truncate rounded-l-md bg-[#cdcdcd]`}
        style={{ transition: "width .5s, display .5s" }}
      >
        <div
          onClick={() => setIsAnimalsExpanded(!isAnimalsExpanded)}
          className="ml-2 mt-2 flex cursor-pointer"
        >
          Animals
          <span>
            {isAnimalsExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-up size-6"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down size-6"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            )}
          </span>
        </div>
        {links.Animals.map(({ link, title }, index) => (
          <Link
          key={index}
            href={`${link}`}
            className={`${isAnimalsExpanded ? "block" : "hidden"} my-2 ml-8 size-[10pt]`}
            onClick={(e) => {
              setIsOpen(false);
              if(isOpen) {
                setIsAnimalsExpanded(false)
              }
            }}
          >
            {title}
          </Link>
        ))}
        {links.Other.map(({ link, title }, index) => (
          <Link
          key={index}
            href={`${link}`}
            className={`${isAnimalsExpanded ? "hidden" : "block"} my-2 ml-2 size-[10pt]`}
            onClick={(e) => {
              setIsOpen(false);
              if(isOpen) {
                setIsAnimalsExpanded(false)
              }
            }}
          >
            {title}
          </Link>
        ))}
      </div>
      <div
        className="flex w-full justify-center gap-3"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <div className="flex flex-[3] justify-end">
          <AnimalsDropdown links={links.Animals} />
          {links.Other.map(
            ({ link, title }, index) =>
              index < 2 && (
                <div
                  className={`ml-2 hidden items-center justify-center text-white sm:flex ${path === `/${link}` ? "underline" : null}`}
                  key={link}
                >
                  <Link
                    href={`/${link}`}
                    className="font-nav sm:text-sm md:text-md lg:text-lg xl:text-2xl"
                  >
                    {title}
                  </Link>
                </div>
              ),
          )}
        </div>
        <div className="md:flex-[1]">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="website logo"
              className="aspect-square w-[100px] cursor-pointer md:w-[220px]"
            />
          </Link>
        </div>
        <div className="flex flex-[3] items-center justify-center sm:justify-start">
          {links["Other"].map(
            ({ link, title }, index) =>
              index >= 2 && (
                <div
                  className={`ml-2 hidden items-center justify-center text-white sm:flex ${path === `/${link}` ? "underline" : null}`}
                  key={link}
                >
                  <Link
                    href={`/${link}`}
                    className="font-nav sm:text-sm md:text-md lg:text-lg xl:text-2xl"
                  >
                    {title}
                  </Link>
                </div>
              ),
          )}
          <div
            className="cursor-pointer sm:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
              if(isOpen) {
                setIsAnimalsExpanded(false)
              }
            }}
          >
            <span
              className="relative mb-[4px] block h-[4px] w-[33px] rounded-sm bg-[#cdcdcd]"
              style={
                isOpen
                  ? {
                      transformOrigin: "4px 0px",
                      transition:
                        "transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease",
                      opacity: "1",
                      transform: "rotate(45deg) translate(-2px, -1px)",
                      background: "#232323",
                    }
                  : {
                      transformOrigin: "4px 0px",
                      transition:
                        "transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease",
                    }
              }
            ></span>
            <span
              className="relative mb-[4px] block h-[4px] w-[33px] rounded-sm bg-[#cdcdcd]"
              style={
                isOpen
                  ? {
                      transformOrigin: "4px 0px",
                      transition:
                        "transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease",
                      opacity: "0",
                      transform: "rotate(0deg) scale(0.2, 0.2)",
                    }
                  : {
                      transformOrigin: "4px 0px",
                      transition:
                        "transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease",
                    }
              }
            ></span>
            <span
              className="relative mb-[4px] block h-[4px] w-[33px] rounded-sm bg-[#cdcdcd]"
              style={
                isOpen
                  ? {
                      transformOrigin: "0% 100%",
                      transition:
                        "transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease",
                      opacity: "1",
                      transform: "rotate(-45deg) translate(0, -1px)",
                      background: "#232323",
                    }
                  : {
                      transformOrigin: "0% 100%",
                      transition:
                        "transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease",
                    }
              }
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
