import AnimalPage from "~/components/AnimalPage";
import { farminfo } from "~/utils/farminfo";
import cows1 from "~/images/cows/carosel1.jpg";
import cows2 from "~/images/cows/carosel2.jpg";
import cows3 from "~/images/cows/carosel3.jpg";
import solo from "~/images/cows/cowsolo.jpg";
import logo from "~/images/home/logo.jpg";
import Head from "next/head";

export default function Cows() {
  const cows = farminfo.cows;
  return (
    <>
      <Head>
        <title>Cows - Let Freedom Ring Farm</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn all about the Cows at Let Freedom Ring Farm"
        />
        <meta
          name="keywords"
          content="Let Freedom Ring Farm, Cows, Dexter Cows, Jersey Cows, Beef, Angus"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta
          property="og:description"
          content="Learn all about the Cows at Let Freedom Ring Farm"
        />
        <meta property="og:site_name" content="Let Freedom Ring Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Cows"></meta>
        <meta name="twitter:title" content="Cows"></meta>
        <meta property="og:type" content="website" />
        {/*VVVVVVVVVVVVVVVVVVVVVVVVVV THIS NEED TO BE FILLEd OUT ONCE WE HAVE OUR DOMAIN FIGURED OUT VVVVVVVVVVVVVVVVVVVVv */}
        <meta property="og:url" content="" />
        <meta name="twitter:type" content="website"></meta>
      </Head>
      <AnimalPage
        animal={cows}
        pic1={cows1}
        pic2={cows2}
        pic3={cows3}
        solo={solo}
        header={logo}
      />
    </>
  );
}