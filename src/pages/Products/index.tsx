import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import ProductCard from "~/components/ProductCard";
import { farmProducts } from "~/utils/farmProducts";
import Image from "next/image";
import beefcuts from "~/images/products/beefcuts.jpg";
import porkcuts from "~/images/products/porkcuts.jpg";

export default function Products() {
  const beef = farmProducts.Beef;
  const pork = farmProducts.Pork;
  const eggs = farmProducts.Eggs;
  const bakedGoods = farmProducts["Baked Goods"];
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div className="mr-2 md:w-1/2 lg:mt-12">
        <div className="dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 flex flex-col rounded-xl border-2 bg-gray-200 shadow-sm">
          <div className="sm:hidden">
            <label htmlFor="hs-card-nav-tabs" className="sr-only">
              Select a nav
            </label>
            <select
              name="hs-card-nav-tabs"
              id="hs-card-nav-tabs"
              className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 block h-8 w-full border-x-0 border-t-0 border-gray-500 pl-4 focus:border-blue-600 focus:ring-blue-600"
              onChange={(e) => {
                router.push(`/Products?name=${e.currentTarget.value}`);
              }}
            >
              <option selected={name === "beef" ? true : false} value="beef">
                Beef
              </option>
              <option selected={name === "pork" ? true : false} value="pork">
                Pork
              </option>
              <option selected={name === "eggs" ? true : false} value="eggs">
                Eggs
              </option>
              <option
                selected={name === "baked-goods" ? true : false}
                value="baked-goods"
              >
                Baked Goods
              </option>
            </select>
          </div>
          <div className="hidden sm:block">
            <nav
              className="dark:border-neutral-700 dark:divide-neutral-700 relative z-0 flex divide-x rounded-xl border-b"
              aria-label="Tabs"
            >
              <Link
                className={`dark:bg-neutral-800 dark:text-neutral-300 text-md group relative min-w-0 flex-1 overflow-hidden rounded-ss-xl bg-white px-4 py-4 text-center font-medium hover:bg-gray-50 focus:z-10 ${name === "beef" || name === null ? "border-b-2 border-b-blue-600 text-gray-900 dark:border-blue-500" : "dark:hover:bg-neutral-700 dark:hover:text-neutral-400 border-b-2 border-b-gray-500 text-gray-600 hover:text-gray-800"}`}
                href={{
                  pathname: "/Products",
                  query: { name: "beef" },
                }}
                scroll={false}
              >
                Beef
              </Link>

              <Link
                className={`dark:bg-neutral-800 text-md group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center font-medium hover:bg-gray-50 focus:z-10 ${name === "pork" ? "border-b-2 border-b-blue-600 text-gray-900 dark:border-blue-500" : "dark:hover:bg-neutral-700 dark:hover:text-neutral-400 border-b-2 border-b-gray-500 text-gray-600 hover:text-gray-800"}`}
                href={{
                  pathname: "/Products",
                  query: { name: "pork" },
                }}
                scroll={false}
              >
                Pork
              </Link>

              <Link
                className={`dark:bg-neutral-800 text-md group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center font-medium hover:bg-gray-50 focus:z-10 ${name === "eggs" ? "border-b-2 border-b-blue-600 text-gray-900 dark:border-blue-500" : "dark:hover:bg-neutral-700 dark:hover:text-neutral-400 border-b-2 border-b-gray-500 text-gray-600 hover:text-gray-800"}`}
                href={{
                  pathname: "/Products",
                  query: { name: "eggs" },
                }}
                scroll={false}
              >
                Eggs
              </Link>

              <Link
                className={`dark:bg-neutral-800 text-md group relative min-w-0 flex-1 overflow-hidden rounded-se-xl bg-white px-4 py-4 text-center font-medium hover:bg-gray-50 focus:z-10 ${name === "baked-goods" ? "border-b-2 border-b-blue-600 text-gray-900 dark:border-blue-500" : "dark:hover:bg-neutral-700 dark:hover:text-neutral-400 border-b-2 border-b-gray-500 text-gray-600 hover:text-gray-800"}`}
                href={{
                  pathname: "/Products",
                  query: { name: "baked-goods" },
                }}
                scroll={false}
              >
                Baked Goods
              </Link>
            </nav>
          </div>
          {(name === "beef" || name === null) &&
            beef.map((product) => <ProductCard product={product} />)}
          {name === "pork" &&
            pork.map((product) => <ProductCard product={product} />)}
          {name === "eggs" &&
            eggs.map((product) => <ProductCard product={product} />)}
          {name === "baked-goods" &&
            bakedGoods.map((product) => <ProductCard product={product} />)}
        </div>
      </div>
      {(name === "beef" || name === null) && (
        <Image
          src={beefcuts}
          alt="picture depicts different cuts of beef from a single cow"
          className="hidden sm:flex sm:ml-6 sm:h-fit sm:w-auto lg:mt-12"
        />
      )}
      {name === "pork" && (
        <Image
          src={porkcuts}
          alt="picture depicts different cuts of beef from a single cow"
          className="hidden sm:flex sm:ml-6 sm:w-[612px] sm:h-[416px] lg:mt-12"
        />
      )}
    </div>
  );
}
