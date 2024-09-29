import Image from "next/image";

import phText from "../public/text/purdue-hackers.svg"
import purdueText from "../public/text/purdue.svg"
import hackersText from "../public/text/hackers.svg"
import gliderCubes from "../public/glider-cubes.png"
import gliderCubes2 from "../public/glider-cubes2.png"

const Hero = () => {
  return (
    <div className="bg-amber-100 flex flex-col items-center justify-center py-12 lg:py-0 lg:h-screen gap-y-4">
        <div className="flex">
            <div className="bg-amber-0 w-fit h-fit flex flex-col items-start justify-start">
                <Image className="w-128 h-fit relative top-24"
                    src={purdueText}
                    alt="purdue hackers"
                />
                <Image className="w-128 h-fit relative -top-24"
                    src={hackersText}
                    alt="purdue hackers"
                />
            </div>
            <Image className="w-96 h-fit"
                src={gliderCubes}
                alt="glider cubes"
            />
            <Image className="w-96 h-fit"
                src={gliderCubes2}
                alt="glider cubes"
            />
        </div>
        <div className="w-10/12 hidden p-6 border-4 border-black rounded-sm shadow-blocks shadow-gray-800 bg-amber-400 lg:w-auto">
            <h1 className="text-6xl font-bold text-center sm:text-8xl lg:text-9xl">
                Purdue Hackers
            </h1>
        </div>
        <div className="hidden w-10/12 mx-auto sm:w-1/2">
            <div className="p-4 bg-white border-4 border-black rounded-sm shadow-blocks shadow-gray-800">
                <p className="text-lg font-bold sm:text-xl">
                    💛⚡️🧱 a community of students who collaborate, learn, and build
                    kick-ass technical projects
                </p>
            </div>
        </div>
    </div>
  );
};

export default Hero;