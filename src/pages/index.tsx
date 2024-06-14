import Head from "next/head";
import AnimalPage from "~/components/AnimalPage";
import { farminfo } from "~/utils/farminfo";
import home1 from "~/images/home/carosel1.jpg";
import home2 from "~/images/home/carosel2.jpg";
import home3 from "~/images/home/carosel3.jpg";
import solo from "~/images/home/homesolo.jpg";
import logo from "~/images/home/logo.jpg";

export default function Home() {
  const home = farminfo.home;

  return (
    <>
      <Head>
        <title>Home - Let Freedom Ring Farm</title>
        <link rel="icon" href="/farmfavicon.ico" />
        <meta
          name="description"
          content="Learn all about Let Freedom Ring Farm"
        />
        <meta
          name="keywords"
          content="Let Freedom Ring Farm, Home, Silver fox Home, Bio-diverse, polyface farming, regenerative farming, farm tours, Shenendoah Valley Farm, Mount Jackson farm, Shen valley farm, Farm sales, Shenendoah Farm products"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta
          property="og:description"
          content="Learn all about the Home at Let Freedom Ring Farm"
        />
        <meta property="og:site_name" content="Let Freedom Ring Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Home"></meta>
        <meta name="twitter:title" content="Home"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lfrfarm.com" />
        <meta name="twitter:type" content="website"></meta>
      </Head>
      <AnimalPage
        animal={home}
        pic1={home1}
        pic2={home2}
        pic3={home3}
        header={logo}
        solo={solo}
      />
    </>
  );
}
