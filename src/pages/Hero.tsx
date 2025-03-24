import { DotBackground } from "@/components/DotBackground";
import Frames from "@/pages/Frames";
import Image from "next/image";
import "./Hero.css";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main>
      <DotBackground>
        <div className="flex min-h-[150vh] w-full flex-col items-center">
          {/* Hero Section */}
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
              className="mt-4 z-10 cursor-pointer transition group hover:bg-neutral-100 duration-300 rounded-md"
            >
              <Button className="group-hover:bg-transparent">
                Get to the frames
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1 ml-2">
                  →
                </span>
              </Button>
            </a>
          </div>
          <Frames />
        </div>
      </DotBackground>
    </main>
  );
}
