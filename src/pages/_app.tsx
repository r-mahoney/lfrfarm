import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import Subscription from "~/components/Subscription";
import { useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [navBarHeight, setNavBarHeight] = useState(0)
  useEffect(() => {
    setNavBarHeight(document.getElementById("navBar")!.offsetHeight)
  }, [])
  console.log(navBarHeight)
  return (
    // <SessionProvider session={session}>
    <main className={`font-sans ${inter.variable}`}>
      <NavBar />
      <div className="flex min-h-screen flex-col justify-between">
        <Component {...pageProps} />
        <>
          <Subscription />
          <Footer />
        </>
      </div>
    </main>
    // </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
