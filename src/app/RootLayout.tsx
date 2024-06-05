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
        <title>Word Cascade</title>
        <meta name="description" content="Word Cascade" />
        <link rel="icon" href="/try-angle-kids-logo.png" />
      </Head>
      <Header />
      <main className={`${poppins.className} ${styles.mainContent}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
