import Link from "next/link";
import Image from "next/image";
import AnimalsDropdown from "./AnimalsDropdown";
import logo from "~/images/home/logo.jpg";
import { usePathname } from "next/navigation";

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
      <div className="flex w-full justify-center gap-3" style={{backdropFilter: "blur(2px)"}}>
        <AnimalsDropdown links={links["Animals"]} />
        {links["Other"].map(
          ({ link, title }, index) =>
            index < 2 && (
              <div
                className={`ml-2 text-white hidden items-center justify-center sm:flex ${path === `/${link}` ? "underline" : null}`}
                key={link}
              >
                <Link
                  href={`/${link}`}
                  className="font-nav text-xl lg:text-2xl"
                >
                  {title}
                </Link>
              </div>
            ),
        )}
        <Link href={"/"}>
          <Image
            src={logo}
            alt="website logo"
            className="aspect-square w-[100px] cursor-pointer md:w-[220px]"
          />
        </Link>
        {links["Other"].map(
          ({ link, title }, index) =>
            index >= 2 && (
              <div
                className={`ml-2 text-white hidden items-center justify-center sm:flex ${path === `/${link}` ? "underline" : null}`}
                key={link}
              >
                <Link
                  href={`/${link}`}
                  className="font-nav text-xl lg:text-2xl"
                >
                  {title}
                </Link>
              </div>
            ),
        )}
      </div>
    </div>
  );
}
