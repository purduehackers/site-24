import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Head from "next/head";
import Image from "next/image";

import bricks from "../public/bricks.svg"

export default function Home() {
  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV;
  return (
    <div>
      <Head>
        <meta name="theme-color" content="#D97706" />
        <link
          rel="icon"
          href={
            vercelEnv === 'production'
              ? '/favicon.ico'
              : vercelEnv === 'preview'
              ? '/favicon_preview.ico'
              : '/favicon_dev.ico'
          }
        />
      </Head>
      <main>
        <Hero />
        <Image className="w-4/5"
          src={bricks}
          alt="Bricks"
        />
      </main>
    </div>
  );
}
