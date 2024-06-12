import Image, { StaticImageData } from "next/image";
import { Animal } from "~/utils/Types";

export default function EventsPage({
  animal,
  pic1,
  pic2,
  pic3,
}: {
  animal: Animal;
  pic1: StaticImageData;
  pic2: StaticImageData;
  pic3: StaticImageData;
}) {
  const { h1, p1, h2, p2, h3, p3, h4, p4 } = animal;
  return (
    <div className="mx-12 lg:mx-36">
      <div className="text-center font-heading text-mobileHeader md:text-heading lg:mt-20">
        {h1}
      </div>
      <div className="text-wrap text-center font-paragraph text-mobileParagraph md:text-paragraph">
        <p dangerouslySetInnerHTML={{ __html: p1 }} />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 content-center text-center md:text-left">
          <div className="font-heading text-mobileHeader md:text-heading">
            {h2}
          </div>
          <div className="font-paragraph text-mobileParagraph md:text-paragraph">
            <p dangerouslySetInnerHTML={{ __html: p2 }} />
          </div>
        </div>
        <Image
          src={pic1}
          alt="pic"
          className="aspect-square h-[200px] flex-1 rounded-xl md:mr-10 md:h-[325px] lg:h-[647.5px]"
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <Image
          src={pic2}
          alt="pic"
          className="aspect-square h-[200px] flex-1 rounded-xl md:mr-10 md:h-[325px] lg:h-[647.5px]"
        />
        <div className="flex-1 content-center text-center md:text-left">
          <div className="font-heading text-mobileHeader md:text-heading">
            {h3}
          </div>
          <div className="font-paragraph text-mobileParagraph md:text-paragraph">
            <p dangerouslySetInnerHTML={{ __html: p3 }} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 content-center text-center md:text-left">
          <div className="font-heading text-mobileHeader md:text-heading">
            {h4}
          </div>
          <div className="font-paragraph text-mobileParagraph md:text-paragraph">
            <p dangerouslySetInnerHTML={{ __html: p4! }} />
          </div>
        </div>
        <Image
          src={pic3}
          alt="pic"
          className="aspect-square h-[200px] flex-1 rounded-xl md:mr-10 md:h-[325px] lg:h-[647.5px]"
        />
      </div>
    </div>
  );
}
