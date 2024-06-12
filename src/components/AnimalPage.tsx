import { Animal } from "../utils/Types";
import Image, { StaticImageData } from "next/image";
import ImageCarousel from "./ImageCarousel";

export default function AnimalPage({
  animal,
  pic1,
  pic2,
  pic3,
  header,
  solo,
}: {
  animal: Animal;
  pic1: StaticImageData;
  pic2: StaticImageData;
  pic3: StaticImageData;
  header: StaticImageData;
  solo: StaticImageData;
}) {
  const { h1, p1, h2, p2, h3, p3 } = animal;

  return (
    <div className="mx-12 lg:mx-36">
      <div className="text-mobileHeader md:text-heading font-heading text-center lg:mt-20">{h1}</div>
      <div className="text-mobileParagraph md:text-paragraph font-paragraph text-wrap text-center">
      <p dangerouslySetInnerHTML={{ __html: p1 }} />
      </div>
      <div className="flex flex-col md:flex-row">
        <Image
          src={solo}
          alt="pic"
          className="md:mr-10 rounded-xl aspect-square h-[200px] flex-1 md:h-[325px] lg:h-[647.5px]"
        />
        <div className="flex-1 content-center text-center md:text-left">
          <div className="text-mobileHeader md:text-heading font-heading">{h2}</div>
          <div className="text-mobileParagraph md:text-paragraph font-paragraph">
            <p dangerouslySetInnerHTML={{ __html: p2 }} />
          </div>
        </div>
      </div>
      <div className="mb-10 lg:mx-32">
        <div className="text-mobileHeader md:text-heading font-heading text-center">{h3}</div>
        <div className="text-mobileParagraph md:text-paragraph font-paragraph text-wrap text-center">
          <p dangerouslySetInnerHTML={{ __html: p3 }} />
        </div>
        <ImageCarousel src1={pic1} src2={pic2} src3={pic3} />
      </div>
    </div>
  );
}
