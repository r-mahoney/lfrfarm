import eggs1 from "~/images/eggs/carosel1.jpg";
import eggs2 from "~/images/eggs/carosel2.jpg";
import eggs3 from "~/images/eggs/carosel3.jpg";
import solo from "~/images/eggs/eggsolo.jpg";
import logo from "~/images/home/logo.jpg";
import Head from "next/head";
import AnimalPage from "~/components/AnimalPage";
import { farminfo } from "~/utils/farminfo";

export default function Eggs() {
  const eggs = farminfo.eggs;
  return (
    <>
      <Head>
        <title>Eggs - Let Freedom Ring Farm</title>
        <link rel="icon" href="/farmfavicon.ico" />
        <meta
          name="description"
          content="Learn all about Eggs at Let Freedom Ring Farm"
        />
        <meta
          name="keywords"
          content="Let Freedom Ring Farm, Eggs, Ducks eggs, Quail eggs, Chicken eggs, Washed eggs"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta
          property="og:description"
          content="Learn all about Eggs at Let Freedom Ring Farm"
        />
        <meta property="og:site_name" content="Let Freedom Ring Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Eggs"></meta>
        <meta name="twitter:title" content="Eggs"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lfrfarm.com/Eggs" />
        <meta name="twitter:type" content="website"></meta>
      </Head>
      <AnimalPage animal={eggs} pic1={eggs1} pic2={eggs2} pic3={eggs3} solo={solo} header={logo}/>
    </>
  );
}
