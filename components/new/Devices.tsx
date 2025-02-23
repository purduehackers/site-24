

export default function Devices() {
    return (
        <div className="w-screen min-h-screen bg-purple transform-3d">
            <button className="relative block px-12 py-5 font-black text-black uppercase bg-white 
                    transition duration-200 rotate-[25deg] origin-bottom-left perspective-[400px] 
                    transform rotate-x-[55deg] transform-3d active:bottom-0 
                    before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-[15px] 
                    before:bg-gray-200 before:transform before:-rotate-x-90 before:origin-top before:transition-[height] before:duration-200 
                    after:content-[''] after:absolute after:left-full after:top-0 after:w-[15px] after:h-full after:bg-gray-400 
                    after:transform after:rotate-y-90 after:origin-left after:transition-[width] after:duration-200">
                Faux 3D Button
            </button>
            <button className="btn-51">
                test
            </button>
            <div className="perspective-800">
  <div className="transform-3d">
    <div className="translate-z-12 rotate-x-0 bg-sky-300/75">1</div>
    <div className="-translate-z-12 rotate-y-18 bg-sky-300/75">2</div>
    <div className="translate-x-12 rotate-y-90 bg-sky-300/75">3</div>
    <div className="-translate-x-12 -rotate-y-90 bg-sky-300/75">4</div>
    <div className="-translate-y-12 rotate-x-90 bg-sky-300/75">5</div>
    <div className="translate-y-12 -rotate-x-90 bg-sky-300/75">6</div>
  </div>
</div>

            <div className="transform-3d size-20 perspective-dramatic">
                <div className="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
                <div className="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
                <div className="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
                <div className="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
                <div className="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
                <div className="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
            </div>
            <div className="transform-3d size-20 perspective-normal ...">
                <div className="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
                <div className="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
                <div className="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
                <div className="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
                <div className="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
                <div className="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
            </div>
        </div>
    );
}