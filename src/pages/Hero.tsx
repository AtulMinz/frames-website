import { DotBackground } from "@/components/DotBackground";
import Image from "next/image";
import "./Hero.css";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main>
      <DotBackground>
        <div className="flex h-[60vh] w-full justify-center items-center flex-col">
          <div className="flex flex-col items-center">
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
            <Button className="mt-4 z-10 hover:cursor-pointer">
              Get to the frames
            </Button>
          </div>
        </div>
      </DotBackground>
    </main>
  );
}
