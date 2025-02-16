"use client";

import React, { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, LightBulb } from "@/components/3D";

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
import Blog from "@/components/blog";

export default function Home() {
  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV;
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js";
    script.async = true;

    script.onload = () => {
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

        <div className="bg-indigo-500 relative">
          <div className="z-20 relative flex flex-col justify-center items-end ">
            <Email />
            
            <Image className="z-20 relative w-48 h-fit relative p-8"
              src={cake}
              alt="Cake"
            />
            <div className="z-10 relative -top-24 w-2/5 h-[400px] m-8 border-solid border-black border-2 p-4 
                rounded-sm shadow-blocks shadow-amber-400 bg-gray-800 text-white overflow-scroll">
              <h1 className="text-4xl font-mono font-bold text-center">
                  ???
              </h1> <br/>
              <p className="font-mono font-bold text-gray-200">
                Hello friend.
              </p>
              <div>
                <p className="font-bold">
                  from:{' '}
                  <span className="font-normal">
                    zap@
                    <span className="bg-black text-white">REDACTED</span>
                  </span>
                </p>
                <p className="font-bold">
                  subject: <span className="font-normal">an invitation</span>
                </p>
                <br />
                <div className="flex flex-col gap-y-4 text-mxs">
                  <p>Dear Hacker,</p>
                  <p>
                    <span className="font-bold">
                      Shipping a technical project
                    </span>{' '}
                    that you’re proud of is among the most{' '}
                    <span className="font-bold">
                      {' '}
                      validating and rewarding{' '}
                    </span>{' '}
                    things you can do as a young person. College is the best
                    time in our lives to do it—but{' '}
                    <span className="font-bold">
                      actually doing it is soooooooooo hard.
                    </span>{' '}
                    You have to find something you’d enjoy building, feels
                    unique, and allows you to learn new things, but not too
                    many new things, otherwise you’ll give up. Then, you have
                    to find the time and motivation to actually build the
                    thing—all while being pulled in every direction by
                    academic and social obligations.
                  </p>
                  <p>
                    It’s no surprise most students simply don’t bother, &
                    graduate never having made something they’re proud of.
                  </p>
                  <p>
                    <span className="font-bold">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                        Purdue Hackers
                      </span>{' '}
                      is a student organization
                    </span>{' '}
                    (AKA magical universe) full of radically kind, inclusive,
                    and weirdo creative people who{' '}
                    <span className="font-bold">
                      learn new things & ship projects together.
                    </span>
                  </p>
                  <p>
                    Many of us grew up never having found our people until we
                    were united by our shared love for making things. Via our
                    community, workshops, and Hack Nights, we want to create
                    an environment where{' '}
                    <span className="font-bold">
                      you can find your people too
                    </span>
                    , and make magic with them. ✨
                  </p>
                  <p>
                    If you go to Purdue—whether you&apos;ve never written code
                    before, or are highly technical, whether you&apos;re an
                    art major or a CS major—
                    <span className="font-bold">
                      we invite you to join our universe.
                    </span>
                  </p>
                </div>
                <br />
                <p className="text-mxs">See you soon,</p>
                <p className="text-mxs">💛⚡️ The Purdue Hackers community</p>
              </div>
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
        <Community />
        <Blog />

        <div className="w-screen h-screen">
          <Canvas
            shadows
            className="bg-amber-100"
            camera={{
              position: [-6, 7, 7],
            }}
          >
            <ambientLight color={"white"} intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />

            <LightBulb position={[0, 3, 0]} />
            <Box rotation={[Math.PI / 2, 0, 0]} />
            
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshPhongMaterial />
            </mesh> 
            <directionalLight position={[0, 0, 5]} color="red" />
          </Canvas>
        </div>

        {/* Hack marquis */}
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
