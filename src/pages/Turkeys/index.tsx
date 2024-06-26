import AnimalPage from "~/components/AnimalPage";
import { farminfo } from "~/utils/farminfo";
import turkey1 from "~/images/turkey/carosel1.jpg";
import turkey2 from "~/images/turkey/carosel2.jpg";
import turkey3 from "~/images/turkey/carosel3.jpg";
import solo from "~/images/turkey/turkeysolo.jpg";
import logo from "~/images/home/logo.jpg";
import Head from "next/head";

export default function Turkeys() {
  const turkeys = farminfo.turkeys;
  return (
    <>
      <Head>
        <title>Turkeys - Let Freedom Ring Farm</title>
        <link rel="icon" href="/farmfavicon.ico" />
        <meta
          name="description"
          content="Learn all about the Turkeys at Let Freedom Ring Farm"
        />
        <meta
          name="keywords"
          content="Let Freedom Ring Farm, Turkeys, Snood brood, Brood, Royal Palms, Blue Slates, Broad breasted, Gobble"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta
          property="og:description"
          content="Learn all about the Turkeys at Let Freedom Ring Farm"
        />
        <meta property="og:site_name" content="Let Freedom Ring Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Turkeys"></meta>
        <meta name="twitter:title" content="Turkeys"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lfrfarm.com/Turkeys" />
        <meta name="twitter:type" content="website"></meta>
      </Head>
      <AnimalPage
        animal={turkeys}
        pic1={turkey1}
        pic2={turkey2}
        pic3={turkey3}
        header={logo}
        solo={solo}
      />
    </>
  );
}
