import AnimalPage from "~/components/AnimalPage";
import { farminfo } from "~/utils/farminfo";
import rabbit1 from "~/images/rabbits/carosel1.jpg";
import rabbit2 from "~/images/rabbits/carosel2.jpg";
import rabbit3 from "~/images/rabbits/carosel3.jpg";
import solo from "~/images/rabbits/rabbitsolo.jpg";
import logo from "~/images/home/logo.jpg";
import Head from "next/head";

export default function Rabbits() {
  const rabbits = farminfo.rabbits;
  return (
    <>
      <Head>
        <title>Rabbits - Let Freedom Ring Farm</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn all about the Rabbits at Let Freedom Ring Farm"
        />
        <meta
          name="keywords"
          content="Let Freedom Ring Farm, Rabbits, Silver fox rabbits, Chinchilla rabbits, Buns, Lean meat"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta
          property="og:description"
          content="Learn all about the Rabbits at Let Freedom Ring Farm"
        />
        <meta property="og:site_name" content="Let Freedom Ring Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Rabbits"></meta>
        <meta name="twitter:title" content="Rabbits"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lfrfarm.com/Rabbits" />
        <meta name="twitter:type" content="website"></meta>
      </Head>
      <AnimalPage
        animal={rabbits}
        pic1={rabbit1}
        pic2={rabbit2}
        pic3={rabbit3}
        header={logo}
        solo={solo}
      />
    </>
  );
}
