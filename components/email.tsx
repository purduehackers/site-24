import Image from "next/image";

import blog from "../public/text/blog.svg";
import { useEffect } from "react";

const Email = () => {
    

    useEffect(() => {
        console.log(document.getElementById('svg1'))
    });

    return (
        <div className="bg-amber-200 flex flex-col items-center justify-center py-12 lg:min-h-screen gap-y-4">
            <h1 className="text-amber-500 tracking-[10rem] text-[10rem] font-black text-stroke-black text-stroke-2 text-shadow shadow-black">
                blog
            </h1>
            <Image id="svg1" className="w-64 h-fit"
                src={blog}
                alt="blog"
            />
            <div className="z-20 relative w-3/4 h-[500px] flex border-solid border-black border-2 bg-amber-100
                    shadow-blocks shadow-cyan-500">
                <div  className="w-2/5 h-full flex border-solid border-black border-2 p-6">
                    <div  className="w-4/5 h-4/5 bg-[#5100ff] border-solid border-black border-2 p-4">
                    test
                    </div>
                </div>
                <div  className="w-3/5 h-full flex flex-col border-solid border-black border-2">
                    <div  className="w-full h-1/5 flex border-solid border-black border-b-2 p-4">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Email;