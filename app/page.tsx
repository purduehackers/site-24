"use client";

import React, { useEffect, useState } from "react";
import { DistortionText, SplitColorChannelText } from 'react-text-fun'

import Head from "next/head";
import Image from "next/image";

import bricks from "../public/img/bricks.svg";
import cake from "../public/img/cake.png";

import "./globals.css";
import Hero from "@/components/hero";
import Email from "@/components/email";
import Community from "@/components/community";
import JoinUs from "@/components/join-us";
import Footer from "@/components/footer";

export default function Home() {
  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV;
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js";
    script.async = true;

    script.onload = () => {
      console.log("Blotter.js loaded.");
      setScriptLoaded(true); // Set state to true when loaded
    };

    script.onerror = (e) => console.error("Failed to load Blotter.js:", e);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  

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
        {scriptLoaded && <SplitColorChannelText
          text="Burst"
          fontSize={120}
          rotation={5.0}
          rgbOffset={0.8}
          addBlur={false}
          addNoise={true}
        />}
        

        <div className="bg-indigo-500 relative">
          <div className="z-20 relative flex flex-col justify-center items-end ">
            <Image className="z-20 relative w-48 h-fit relative p-8"
              src={cake}
              alt="Cake"
            />
            <div className="z-10 relative -top-24 w-2/5 h-[400px] m-8 border-solid border-black border-2 p-4 
                rounded-sm shadow-blocks shadow-amber-400 bg-gray-800 text-white">
              <h1 className="text-4xl font-mono font-bold text-center">
                  ???
              </h1> <br/>
              <p className="font-mono font-bold text-gray-200">
                Hello friend.
              </p>
            </div>
            <div className="z-10 relative -top-24 w-fit h-fit m-8 border-solid border-black border-2 p-4 
                rounded-sm shadow-blocks shadow-amber-400 bg-gray-800 text-white">
              <h1 className="text-4xl font-mono font-bold text-center">
                  list cards
              </h1>
            </div>
          </div>
          <div className="z-20 relative flex flex-col justify-center items-start">
            <div className="z-10 relative -top-24 w-fit h-fit m-8 border-solid border-black border-2 p-4 
                rounded-sm shadow-blocks shadow-amber-400 bg-gray-800 text-white">
              <h1 className="text-4xl font-mono font-bold text-center">
                list cards
              </h1>
            </div>
            <div className="z-10 relative -top-24 w-fit h-fit m-8 border-solid border-black border-2 p-4 
                rounded-sm shadow-blocks shadow-amber-400 bg-gray-800 text-white">
              <h1 className="text-4xl font-mono font-bold text-center">
                idk
              </h1>
            </div>
            <div className="z-10 relative -top-24 w-fit h-fit m-8 border-solid border-black border-2 p-4 
                rounded-sm shadow-blocks shadow-amber-400 bg-gray-800 text-white">
              <h1 className="text-4xl font-mono font-bold text-center">
                more stuff
              </h1>
            </div>
          </div>
          <Image className="z-0 w-4/5 absolute -top-4 -left-24 -skew-y-[30deg] scale-y-100"
            src={bricks}
            alt="Bricks"
          />
          <Image className="z-0 w-4/5 absolute top-2/3 left-1/2 skew-y-[30deg] scale-y-100"
            src={bricks}
            alt="Bricks"
          />
        </div>
        <Email />
        <Community />

        <div className="flex">
          {
            [...Array(2)].map((_, i) => {
              return (
                <div key={`outer-${i}-1`} className="z-30 font-pixel flex bg-cyan-500 text-amber-300 whitespace-nowrap animate-horizontal-scroll">
                  {
                    [...Array(20)].map((_, j) => {
                      return (
                        <div key={`inner-${i}-${j}-1`} className="mr-2">
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

        <JoinUs />

        <div className="flex">
          {
            [...Array(2)].map((_, i) => {
              return (
                <div key={`outer-${i}-2`} className="z-30 font-pixel flex text-pink-500 bg-amber-300 whitespace-nowrap animate-horizontal-scroll-reverse">
                  {
                    [...Array(20)].map((_, j) => {
                      return (
                        <div key={`inner-${i}-${j}-2`} className="mr-2">
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
        <Footer />
      </main>
    </div>
  );
}
