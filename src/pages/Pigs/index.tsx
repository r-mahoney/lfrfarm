import AnimalPage from "~/components/AnimalPage";
import { farminfo } from "~/utils/farminfo";
import pigs1 from "~/images/pigs/carosel1.jpg";
import pigs2 from "~/images/pigs/carosel2.jpg";
import pigs3 from "~/images/pigs/carosel3.jpg";
import solo from "~/images/pigs/pigsolo.jpg";
import logo from "~/images/home/logo.jpg";
import Head from "next/head";

export default function Pigs() {
  const pigs = farminfo.pigs;
  return (
    <>
      <Head>
        <title>Pigs - Let Freedom Ring Farm</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn all about the Pigs at Let Freedom Ring Farm"
        />
        <meta
          name="keywords"
          content="Let Freedom Ring Farm, Pigs, Bacon, Ham, Lard pigs, Bacon pigs, Tamworth pigs, American Guinea Hog, Oassabaw Island Hogs"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta
          property="og:description"
          content="Learn all about the Pigs at Let Freedom Ring Farm"
        />
        <meta property="og:site_name" content="Let Freedom Ring Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Pigs"></meta>
        <meta name="twitter:title" content="Pigs"></meta>
        <meta property="og:type" content="website" />
        {/*VVVVVVVVVVVVVVVVVVVVVVVVVV THIS NEED TO BE FILLEd OUT ONCE WE HAVE OUR DOMAIN FIGURED OUT VVVVVVVVVVVVVVVVVVVVv */}
        <meta property="og:url" content="" />
        <meta name="twitter:type" content="website"></meta>
      </Head>
      <AnimalPage
        animal={pigs}
        pic1={pigs1}
        pic2={pigs2}
        pic3={pigs3}
        header={logo}
        solo={solo}
      />
    </>
  );
}
