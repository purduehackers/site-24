import Image from "next/image";

import phTextFilled from "../public/text/purdue-hackers-filled.svg"
import dino from "../public/dino-w-tail.png"

const Test = () => {
  return (
    <div className="bg-amber-100 flex flex-col items-center justify-center py-12 lg:py-0 lg:h-screen gap-y-4">
        <Image className="w-64 h-fit"
            src={dino}
            alt="dino"
        />
    </div>
  );
};

export default Test;