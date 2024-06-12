import AnimalPage from "~/components/AnimalPage";
import { farminfo } from "~/utils/farminfo";
import ducks1 from "~/images/ducks/carosel1.jpg";
import ducks2 from "~/images/ducks/carosel2.jpg";
import ducks3 from "~/images/ducks/carosel3.jpg";
import solo from "~/images/ducks/duckssolo.jpg";
import logo from "~/images/home/logo.jpg";
import Head from "next/head";

export default function Ducks() {
  const ducks = farminfo.ducks;
  return (
    <>
      <Head>
        <title>Ducks - Let Freedom Ring Farm</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn all about the Ducks at Let Freedom Ring Farm"
        />
        <meta
          name="keywords"
          content="Let Freedom Ring Farm, Ducks, Ducklings, Quack, Eggs"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta
          property="og:description"
          content="Learn all about the Ducks at Let Freedom Ring Farm"
        />
        <meta property="og:site_name" content="Let Freedom Ring Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Ducks"></meta>
        <meta name="twitter:title" content="Ducks"></meta>
        <meta property="og:type" content="website" />
        {/*VVVVVVVVVVVVVVVVVVVVVVVVVV THIS NEED TO BE FILLEd OUT ONCE WE HAVE OUR DOMAIN FIGURED OUT VVVVVVVVVVVVVVVVVVVVv */}
        <meta property="og:url" content="" />
        <meta name="twitter:type" content="website"></meta>
      </Head>
      <AnimalPage
        animal={ducks}
        pic1={ducks1}
        pic2={ducks2}
        pic3={ducks3}
        solo={solo}
        header={logo}
      />
    </>
  );
}
