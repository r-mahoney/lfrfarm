import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Carousel } from "@material-tailwind/react";

export default function ImageCarousel({
  src1,
  src2,
  src3,
}: {
  src1: StaticImageData;
  src2: StaticImageData;
  src3: StaticImageData;
}) {
  return (
    //@ts-expect-error it wants 252 more properties, not doing that
    <Carousel
      loop={true}
      autoplay={true}
      autoplayDelay={3000}
      transition={{ type: "tween", duration: 1 }}
      className="m-auto content-center items-center lg:w-1/2"
      
      // prevArrow={({ handlePrev }) => (
      //   //@ts-ignore
      //   <IconButton
      //     variant="text"
      //     color="black"
      //     size="lg"
      //     onClick={handlePrev}
      //     className="!absolute left-3 top-2/4 -translate-y-2/4"
      //   >
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       fill="none"
      //       viewBox="0 0 24 24"
      //       strokeWidth={2}
      //       stroke="currentColor"
      //       className="h-6 w-6"
      //     >
      //       <path
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      //       />
      //     </svg>
      //   </IconButton>
      // )}
      // nextArrow={({ handleNext }) => (
      //   //@ts-ignore
      //   <IconButton
      //     variant="text"
      //     color="black"
      //     size="lg"
      //     onClick={handleNext}
      //     className="!absolute !right-3 top-2/4 -translate-y-2/4"
      //   >
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       fill="none"
      //       viewBox="0 0 24 24"
      //       strokeWidth={2}
      //       stroke="currentColor"
      //       className="h-6 w-6"
      //     >
      //       <path
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      //       />
      //     </svg>
      //   </IconButton>
      // )}
    >
      <Image
        src={src1}
        alt="image 1"
        className="object-fit m-auto aspect-square h-auto w-full rounded-[10px]"
      />
      <Image
        src={src2}
        alt="image 2"
        className="object-fit m-auto aspect-square h-auto w-full rounded-[10px]"
      />
      <Image
        src={src3}
        alt="image 3"
        className="object-fit m-auto aspect-square h-auto w-full rounded-[10px]"
      />
    </Carousel>
  );
}
