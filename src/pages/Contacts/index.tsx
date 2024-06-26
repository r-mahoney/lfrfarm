import Head from "next/head";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contacts - Let Freedom Ring Farm</title>
        <link rel="icon" href="/farmfavicon.ico" />
        <meta
          name="description"
          content="The most up to date contact information for Let Freedom Ring Farm"
        />
        <meta
          name="keywords"
          content="Let Freedom Ring Farm, Contacts information, Mount Jackson, Telephone number, email address, address, physical location"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta
          property="og:description"
          content="The most up to date contact information for Let Freedom Ring Farm"
        />
        <meta property="og:site_name" content="Let Freedom Ring Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Contacts"></meta>
        <meta name="twitter:title" content="Contacts"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lfrfarm.com/Contacts" />
        <meta name="twitter:type" content="website"></meta>
      </Head>
      <div className="flex flex-col justify-around md:flex-row lg:mx-32 lg:mt-12">
        <div className="flex-1"></div>
        <div className=" w-full flex-1">
          <div className="flex flex-col items-center justify-center">
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
              className="lucide lucide-building-2 mt-8 size-8"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
              <path d="M10 6h4" />
              <path d="M10 10h4" />
              <path d="M10 14h4" />
              <path d="M10 18h4" />
            </svg>
            <p className="font-bold text-center">Company Information:</p>
            <p className="text-center">Let Freedom Ring Farm</p>
          </div>
        </div>
        <div className=" w-full flex-1">
          <div className="flex flex-col items-center justify-center">
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
              className="lucide lucide-map-pin mt-8 size-8"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="font-bold">Location:</p>
            <p className="text-center">570 Dodson Road</p>
            <p className="text-center">Mount Jackson, VA 22842</p>
          </div>
        </div>
        <div className=" w-full flex-1">
          <div className="flex flex-col items-center justify-center">
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
              className="lucide lucide-phone-call mt-8 size-8"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              <path d="M14.05 2a9 9 0 0 1 8 7.94" />
              <path d="M14.05 6A5 5 0 0 1 18 10" />
            </svg>
            <p className="text-center font-bold">Contact Us!</p>
            <p>Telephone:</p>
            <p className="font-semibold">(540) 477-3060</p>
            <p>E-mail:</p>
            <p className="font-semibold">lfrf@1791.com</p>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="mt-8 flex items-center justify-center lg:mx-32">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.64271376064!2d-78.68526482418565!3d38.81773915140068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b500f39ebdfbc5%3A0x2754382b0514d903!2s570%20Dodson%20Rd%2C%20Mt%20Jackson%2C%20VA%2022842!5e0!3m2!1sen!2sus!4v1718241449248!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
