import React from "react";
import Head from "next/head";
import Header from "@/components/Header/Header";
import { inter, poppins, roboto, cabin } from "@/app/ui/fonts";
import Footer from "@/components/Footer/Footer";
import styles from "./RootLayout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${poppins.className} ${styles.mainContent}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
