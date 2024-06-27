import { useState } from "react";
import type { Product } from "~/utils/Types";

export default function ProductCard ({product}: {product: Product}) {
    const {name, price, description} = product
    const [expandedOnMobile, setExpandedOnMobile] = useState<boolean>(false)
    return (
        <div className="pb-2 text-left md:px-5 border-b">
            <div className=" flex justify-between">
              <h3 className="text-lg my-auto font-bold text-black dark:text-white">
                {name}
              </h3>
              <p className="text-md ml-auto my-auto font-semibold text-gray-800">
                {price}
              </p>
            </div>
            <p className="hidden sm:block dark:text-neutral-400 mt-2 text-blue-gray-900">
              {description}
            </p>
            <p className={`${expandedOnMobile ? "" : "overflow-hidden text-ellipsis whitespace-nowrap"} sm:hidden dark:text-neutral-400 mt-2 text-blue-gray-900 pl-4`} onClick={() => setExpandedOnMobile(currentState => !currentState)}>
              {description}
            </p>
          </div>
    )
}