import Image from "next/image";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-transition-group';

import DiscordCard from "./discord.card";
import { discordMessages } from '../utils/data';
import { useState, useEffect } from "react";

const Community = () => {
    // Stacks for cycling between displayed and hidden messages
    const [displayedMsgs, setDisplayedMsgs] = useState(discordMessages.slice(0, 3));
    const [hiddenMsgs, setHiddenMsgs] = useState(discordMessages.slice(3));

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
        }, 5000)
        
        // Clear interval when component unmounts
        return () => clearInterval(intervalId); 
    });

    return (
        <div className="flex flex-col items-center justify-center gap-y-4">
            <h1 className="text-amber-400 text-[5rem] font-black text-stroke-black text-stroke-2 text-shadow shadow-black">
                COMMUNITY
            </h1>
            <div className="z-20 relative w-full h-screen flex border-solid border-black border-2 bg-amber-100
                    shadow-blocks shadow-cyan-500">
                <div className="w-1/3 h-full flex flex-col justify-start items-center overflow-y-hidden transition-all border-solid border-black border-2 p-6">
                    <TransitionGroup>
                        {displayedMsgs.map((message) => (
                            <CSSTransition key={message.id} classNames={{
                                enterActive: 'animate-zoom-in',
                                exitActive: 'animate-fade-out animate-zoom-out'
                            }} timeout={500}>
                                <DiscordCard {...message} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                <div  className="w-2/3 h-full flex flex-col border-solid border-black border-2">
                    <div  className="w-full h-2/5 flex border-solid border-black border-b-2 p-4">

                    </div>
                    <div  className="w-full h-1/5 flex border-solid border-black border-y-2">
                        <div  className="w-1/5 h-full flex border-solid border-black border-r-4 p-4">
                            <button className="email-btn">Hack.</button>
                        </div>
                    </div>
                    <div  className="w-full h-3/5 flex border-solid border-black border-y-2 p-4">
                        <h1 className="text-amber-400 text-[15rem] font-black text-stroke-black text-stroke-4 text-shadow-8 shadow-black">
                            discord
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Community;