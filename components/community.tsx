import Image from "next/image";

import blog from "../public/text/blog.svg"
import dino from "../public/dino-w-tail.png"

const Community = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-4">
        
        <div className="z-20 relative w-full h-full flex border-solid border-black border-2 bg-amber-100
                shadow-blocks shadow-cyan-500">
            <div  className="w-2/5 h-full flex flex-col border-solid border-black border-2 p-6">
                <div className="w-4/5 h-1/5 bg-[#5100ff] border-solid border-black border-2 p-4">
                 test
                </div>
                <div  className="w-4/5 h-4/5 bg-[#5100ff] border-solid border-black border-2 p-4">
                 test
                </div>
            </div>
            <div  className="w-full h-full flex flex-col border-solid border-black border-2">
                <div  className="w-full h-2/5 flex border-solid border-black border-b-2 p-4">

                </div>
                <div  className="w-full h-1/5 flex border-solid border-black border-y-2">
                    <div  className="w-1/5 h-full flex border-solid border-black border-r-4 p-4">
                        <button className="email-btn">Hack.</button>
                    </div>
                </div>
                <div  className="w-full h-3/5 flex border-solid border-black border-y-2 p-4">
                    <h1 className="text-amber-400 text-[15rem] font-black text-stroke-black text-stroke-4 text-shadow-lg shadow-black">
                        discord
                    </h1>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Community;