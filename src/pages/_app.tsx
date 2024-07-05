import { type Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import Subscription from "~/components/Subscription";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    // <SessionProvider session={session}>
    <main className={`font-sans ${inter.variable}`}>
      <NavBar />
      <div className="flex min-h-screen flex-col justify-between">
        <Component {...pageProps} />
        <div className="flex flex-col justify-end">
          <Subscription />
          <Footer />
        </div>
      </div>
    </main>
    // </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
