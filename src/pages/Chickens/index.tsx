import AnimalPage from "~/components/AnimalPage";
import { farminfo } from "~/utils/farminfo";
import chickens1 from "~/images/chickens/carousel1.jpg";
import chickens2 from "~/images/chickens/carousel2.jpg";
import chickens3 from "~/images/chickens/carousel3.jpg";
import solo from "~/images/chickens/chicksolo.jpg";
import logo from "~/images/home/logo.jpg";
import Head from "next/head";

export default function Chickens() {
  const chicken = farminfo.chickens;
  return (
    <>
      <Head>
        <title>Chickens - Let Freedom Ring Farm</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn all about the chickens at Let Freedom Ring Farm"
        />
        <meta
          name="keywords"
          content="Let Freedom Ring Farm, Chickens, Layers, Baby Chicks"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta
          property="og:description"
          content="Learn all about the chickens at Let Freedom Ring Farm"
        />
        <meta property="og:site_name" content="Let Freedom Ring Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Chickens"></meta>
        <meta name="twitter:title" content="Chickens"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lfrfarm.com/Chickens" />
        <meta name="twitter:type" content="website"></meta>
      </Head>
      <AnimalPage
        animal={chicken}
        pic1={chickens1}
        pic2={chickens2}
        pic3={chickens3}
        header={logo}
        solo={solo}
      />
    </>
  );
}
