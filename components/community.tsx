import Image from "next/image";

import DiscordCard from "./discord-card";
import { discordMessages } from '../utils/data';
import { useState, useEffect } from "react";

const Community = () => {
    // Stacks for cycling between displayed and hidden messages
    const [displayedMsgs, setDisplayedMsgs] = useState(discordMessages.slice(0, 4));
    const [hiddenMsgs, setHiddenMsgs] = useState(discordMessages.slice(4));

    useEffect(() => {
        // Autoscroll discord messages every 5 seconds
        const intervalId = setInterval(() => { 
            const newDisplayed = [...displayedMsgs];
            const newHidden = [...hiddenMsgs];
            const elHidden = newHidden.pop();
            const elDisplayed = newDisplayed.pop();

            if (elHidden) newDisplayed.unshift(elHidden);
            if (elDisplayed) newHidden.unshift(elDisplayed);

            setDisplayedMsgs(newDisplayed);
            setHiddenMsgs(newHidden);
        }, 3333)
        
        // Clear interval when component unmounts
        return () => clearInterval(intervalId); 
    });

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-indigo-400 tracking-normal text-[13rem] font-black text-stroke-black text-stroke-2 text-shadow shadow-black">
                COMMUNITY
            </h1>
            <div className="z-20 relative w-full h-screen flex border-solid border-black border-2 bg-amber-100
                    shadow-blocks shadow-cyan-500">
                <div className="w-1/3 flex flex-col overflow-y-hidden transition-all border-solid border-black border-2">
                    <div className="w-full z-30 bg-amber-400 text-white flex gap-2 justify-end px-4 border-solid border-black border-b-2 text-sm text-black font-bold">
                        <div>feed</div>
                        <div className="animate">↓</div>
                    </div>
                    {[...Array(2)].map((_, i) => {
                        return (
                            <div className="w-full relative top-[-220%] flex flex-col justify-start items-center"
                                    key={`outer-${i}-1`} 
                            >
                                <div className="animate-vertical-scroll">
                                    {discordMessages.map((message) => (
                                        <div key={message.id} className={hiddenMsgs.includes(message) ? "animate-zoom-out" : "animate-zoom-in"}>
                                            <DiscordCard {...message} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div  className="w-2/3 h-full flex flex-col border-solid border-black border-2">
                    <div  className="w-full flex justify-center border-solid border-black border-b-2 p-4">
                        <h1 className="text-amber-400 text-[5rem] font-black text-stroke-black text-stroke-2 text-shadow shadow-black">
                            Find Your People 🌈
                        </h1>
                    </div>
                    <div  className="w-full h-1/5 flex border-solid border-black border-y-2">
                        <div  className="bg-teal-400 w-1/5 min-w-[160px] flex justify-center items-center border-solid border-black border-r-4 p-4">
                            <a
                                href="https://puhack.horse/discord"
                                target="_blank"
                            >
                                <button className="email-btn">Join the Community</button>
                            </a>
                        </div>
                        <div className="w-4/5 font-mono">
                            insert creatura graphics here
                        </div>
                    </div>
                    <div  className="w-full h-3/5 flex border-solid border-black border-y-2">
                        <div className="bg-white w-7/12 h-full flex flex-col gap-2 border-solid border-black border-r-4 p-6">
                            <p>
                                The heart & soul of Purdue Hackers is our community on Discord with
                                2000+ people. Share what you&apos;ve made in{' '}
                                <span className="channel-name">#ship</span>, chat about rainbows in{' '}
                                <span className="channel-name">#lounge</span>, share your music
                                musings in <span className="channel-name">#music</span>, ask for
                                technical help in <span className="channel-name">#code</span>
                                —wherever you look, you&apos;ll find weird, kind, radically
                                inclusive, and <span className="italic">really cool</span> people.
                                It&apos;s also where we announce upcoming events.
                            </p>
                            <p>
                                Enter a world of magic, find people who push you to be your best
                                self, and make awesome things together.
                            </p>
                        </div>
                        <div className="w-5/12 h-full flex justify-center items-center bg-violet-400">
                            <div  className="flex flex-col gap-4 justify-center items-center">
                                <a
                                    href="https://puhack.horse/discord"
                                    target="_blank"
                                >
                                    <button className="email-btn text-xl">Feed some mice</button>
                                </a>
                                <a
                                    href="https://puhack.horse/discord"
                                    target="_blank"
                                >
                                    <button className="email-btn text-xl">Visit the blog?</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-2 bg-amber-500 text-white"></div>
                </div>
            </div>
        </div>
    );
};



export default Community;