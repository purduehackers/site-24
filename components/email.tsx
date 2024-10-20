import Image from "next/image";
import Draggable from 'react-draggable';

import blog from "../public/text/blog.svg";
import { useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPaperPlane,
  faCircle,
  faEnvelopeOpen,
  faCircleRadiation,
  faXmark,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Email = () => {
    useEffect(() => {
        console.log(document.getElementById('svg1'))
    });

    return (
        <div className="w-full lg:min-h-screen flex flex-col items-center justify-center py-12 gap-y-4">
            <h1 className="text-amber-500 tracking-[10rem] text-[3rem] font-black text-stroke-black text-stroke-2 text-shadow shadow-black">
                !!!!!!!!!!!
            </h1>
            <div className="z-20 relative w-10/12 h-[600px] flex border-solid border-black border-2 bg-amber-100
                    shadow-blocks shadow-neutral-900/50">
                <div  className="w-3/5 h-full flex flex-col border-solid border-black border-2">
                    <div  className="w-full h-1/5 flex border-solid border-black border-b-2 p-4">
                        
                    </div>
                    <div className="h-full overflow-hidden">
                        <Draggable handle=".handle">
                            <div
                                className="border-2 border-black w-11/12 sm:w-[36rem] sm:min-w-[30rem] mr-12 
                                shadow-email shadow-gray-900/30 h-fit z-0 top-5 left-4 relative"
                            >
                                <div
                                className="flex flex-col items-center"
                                >
                                <div className="absolute bottom-4 border-2 border-black bg-white p-1 text-sm font-bold animate-bounce">
                                    <p>👇 scroll to read 👁</p>
                                </div>
                                </div>
                                <div className="border-b-2 border-black flex flex-row bg-yellow-300 cursor-pointer">
                                <p
                                    className="px-2 border-r-2 border-black bg-red-400 hover:bg-red-500"
                                >
                                    <FontAwesomeIcon icon={faXmark} className="text-xs" />
                                </p>
                                <div className="grow handle" />
                                <p className="handle">an invitation</p>
                                <div className="grow handle" />
                                <div />
                                </div>
                                <div
                                    className="bg-white pl-2 pr-3 py-2 overflow-scroll h-96 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
                                >
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
                        </Draggable>
                    </div>
                </div>
                <div  className="w-2/5 h-full flex border-solid border-black border-2 p-6">
                    <div  className="font-pixel text-white w-4/5 h-4/5 bg-[#5100ff] border-solid border-black border-2 p-4">
                        test
                    </div>
                </div>
            </div>
            <h1 className="text-amber-500 tracking-[10rem] text-[3rem] font-black text-stroke-black text-stroke-2 text-shadow shadow-black">
                aaaaaaa
            </h1>
            <h1 className="text-amber-500 tracking-[10rem] text-[3rem] font-black text-stroke-black text-stroke-2 text-shadow shadow-black">
                new email
            </h1>
        </div>
    );
};

export default Email;