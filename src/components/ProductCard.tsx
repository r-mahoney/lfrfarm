import { Product } from "~/utils/Types";

export default function ProductCard ({product}: {product: Product}) {
    const {name, price, description} = product
    return (
        <div className="p-4 text-left md:px-5 md:py-7 border-b">
            <div className=" flex justify-between">
              <h3 className="text-lg my-auto font-bold text-black dark:text-white">
                {name}
              </h3>
              <p className="text-md ml-auto my-auto font-semibold text-gray-800">
                {price}
              </p>
            </div>
            <p className="dark:text-neutral-400 mt-2 text-gray-500">
              {description}
            </p>
          </div>
    )
}