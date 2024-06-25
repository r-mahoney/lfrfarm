import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AnimalsDropdown({
  links,
}: {
  links: { link: string; title: string }[];
}) {
  const animalLinks: string[] = links.map(({ link }: { link: string }) => link);
  const path = usePathname();
  const strippedPath = path.split("/")[1];

  return (
    <div className="hidden flex-row sm:flex">
      <div
        className={`mr-2 flex items-center justify-center ${animalLinks.includes(strippedPath!) ? "underline" : ""}`}
      >
        <div className="menu-hover group flex flex-col">
          <div
            className={`md:text-md font-nav text-white sm:text-sm lg:text-lg xl:text-2xl`}
          >
            Animals
          </div>
          <div
            className="z-900 invisible absolute flex flex-col bg-gray-100 px-2 md:px-4 py-1 text-gray-800 shadow-xl group-hover:visible"
            onClick={(e) => {
              const dropdown = e.currentTarget;
              dropdown.setAttribute("style", "display: none");
              setTimeout(() => {
                dropdown.removeAttribute("style");
              }, 50);
            }}
          >
            {links.map(({ link, title }: { link: string; title: string }) => (
              <Link
                href={`/${link}`}
                className={`font-nav text-sm xl:text-xl md:text-md  hover:underline ${path === `/${link}` ? "underline" : ""}`}
                key={link}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="mt-1 h-4 w-4 font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
