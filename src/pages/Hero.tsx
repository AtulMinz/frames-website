import { DotBackground } from "@/components/DotBackground";
import Frames from "@/pages/Frames";
import Image from "next/image";
import "./Hero.css";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function Hero() {
  return (
    <main className="flex justify-center flex-col items-center">
      <DotBackground>
        <div className="flex flex-col items-center w-full min-h-[150vh]">
          <div className="flex h-[60vh] w-full justify-center items-center flex-col">
            <div className="flex flex-row items-center">
              <Image
                src={"farcaster.svg"}
                height={100}
                width={100}
                alt="Logo"
                className="z-10"
              />
              <p className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold z-10 sm:text-7xl ml-4 fugaz-one opacity-90">
                <span className="text-[#8A63D2]">Frames</span> for all
              </p>
            </div>
            <a
              href="#frames"
              className="mt-4 z-10 cursor-pointer transition group hover:bg-neutral-100 duration-300 rounded-md scroll-smooth"
            >
              <InteractiveHoverButton className="w-[200px] h-[40px]">
                Get to the frames
              </InteractiveHoverButton>
            </a>
          </div>
          <Frames />
        </div>
      </DotBackground>
    </main>
  );
}
