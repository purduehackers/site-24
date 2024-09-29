import React from "react";

import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Head from "next/head";
import Image from "next/image";

import bricks from "../public/bricks.svg";

import "./globals.css";

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
      <main className="bg-indigo-500">
        <Hero />
        <div className="flex">
          {
            [...Array(2)].map((i) => {
              return (
                <div className="font-pixel flex bg-cyan-500 text-amber-300 whitespace-nowrap animate-horizontal-scroll">
                  {
                    [...Array(20)].map((i) => {
                      return (
                        <div key={i} className="mr-2">
                          HACK.
                        </div>
                      );
                    })
                  }
                </div>
              );
            })
          }
        </div>
        <Image className="w-4/5"
          src={bricks}
          alt="Bricks"
        />
      </main>
    </div>
  );
}
