import AnimalPage from "~/components/AnimalPage";
import { farminfo } from "~/utils/farminfo";
import farmers1 from "~/images/farmers/carosel1.jpg";
import farmers2 from "~/images/farmers/carosel2.jpg";
import farmers3 from "~/images/farmers/carosel3.jpg";
import solo from "~/images/farmers/solo.jpg";
import logo from "~/images/home/logo.jpg";
import Head from "next/head";

export default function Farmers() {
  const farmers = farminfo.farmers;
  return (
    <>
      <Head>
        <title>Farmers - Let Freedom Ring Farm</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn a little more about Brian and Liz, the owners/operators of Let Freedom Ring Farm."
        />
        <meta
          name="keywords"
          content="Let Freedom Ring Farm, Farmers, , Lions Club, Chef, Catering"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:site_name" content="Let Freedom Ring Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Farmers"></meta>
        <meta name="twitter:title" content="Farmers"></meta>
        <meta property="og:type" content="website" />
        {/*VVVVVVVVVVVVVVVVVVVVVVVVVV THIS NEED TO BE FILLEd OUT ONCE WE HAVE OUR DOMAIN FIGURED OUT VVVVVVVVVVVVVVVVVVVVv */}
        <meta property="og:url" content="" />
        <meta name="twitter:type" content="website"></meta>
      </Head>
      <AnimalPage
        animal={farmers}
        pic1={farmers1}
        pic2={farmers2}
        pic3={farmers3}
        header={logo}
        solo={solo}
      />
    </>
  );
}
