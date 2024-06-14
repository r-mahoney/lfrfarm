import AnimalPage from "~/components/AnimalPage";
import { farminfo } from "~/utils/farminfo";
import quail1 from "~/images/quail/carosel1.jpg";
import quail2 from "~/images/quail/carosel2.jpg";
import quail3 from "~/images/quail/carosel3.jpg";
import solo from "~/images/quail/quailsolo.jpg";
import logo from "~/images/home/logo.jpg";
import Head from "next/head";

export default function Quail() {
  const quail = farminfo.quail;
  return (
    <>
      <Head>
        <title>Quail - Let Freedom Ring Farm</title>
        <link rel="icon" href="/farmfavicon.ico" />
        <meta
          name="description"
          content="Learn all about the Quail at Let Freedom Ring Farm"
        />
        <meta
          name="keywords"
          content="Let Freedom Ring Farm, Quail eggs, Coturnix quail, Quail coop, Baby quail, Paste butt, Mobile quail coop"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta
          property="og:description"
          content="Learn all about the Quail at Let Freedom Ring Farm"
        />
        <meta property="og:site_name" content="Let Freedom Ring Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Quail"></meta>
        <meta name="twitter:title" content="Quail"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lfrfarm.com/Quail" />
        <meta name="twitter:type" content="website"></meta>
      </Head>
      <AnimalPage
        animal={quail}
        pic1={quail1}
        pic2={quail2}
        pic3={quail3}
        header={logo}
        solo={solo}
      />
    </>
  );
}
