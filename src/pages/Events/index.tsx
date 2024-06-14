import Head from "next/head";
import EventsPage from "~/components/EventsPage";
import { farminfo } from "~/utils/farminfo";
import cows from '~/images/events/cows.jpg'
import geese from '~/images/events/geese.jpg'
import buns from '~/images/events/buns.jpg'

export default function Events() {
  const events = farminfo.events;
  return (
    <>
      <Head>
        <title>Events - Let Freedom Ring Farm</title>
        <link rel="icon" href="/farmfavicon.ico" />
        <meta
          name="description"
          content="Take a look at the current events happening at the farm. See where we'll be for purchases and fun times."
        />
        <meta
          name="keywords"
          content="Let Freedom Ring Farm, Events, Farmers markets, Market, Mount Jackson farmers market, DOTS Farmers market"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta
          property="og:description"
          content="Take a look at the current events happening at the farm. See where we'll be for purchases and fun times."
        />
        <meta property="og:site_name" content="Let Freedom Ring Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Events"></meta>
        <meta name="twitter:title" content="Events"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lfrfarm.com/Events" />
        <meta name="twitter:type" content="website"></meta>
      </Head>
      <EventsPage animal={events} pic1={cows} pic2={geese} pic3={buns} />
    </>
  );
}
