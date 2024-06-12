import Head from "next/head";
import AnimalPage from "~/components/AnimalPage";
import { farminfo } from "~/utils/farminfo";

export default function Eggs() {
  const eggs = farminfo.eggs;
  return (
    <>
      <Head>
        <title>Eggs - Let Freedom Ring Farm</title>
        <link rel="icon" href="/favicon.ico" />
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
        {/*VVVVVVVVVVVVVVVVVVVVVVVVVV THIS NEED TO BE FILLEd OUT ONCE WE HAVE OUR DOMAIN FIGURED OUT VVVVVVVVVVVVVVVVVVVVv */}
        <meta property="og:url" content="" />
        <meta name="twitter:type" content="website"></meta>
      </Head>
      <AnimalPage animal={eggs} />
    </>
  );
}
