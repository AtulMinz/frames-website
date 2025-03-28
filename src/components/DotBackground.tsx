import React from "react";

export function DotBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex w-full flex-col items-start justify-center bg-white dark:bg-black">
      <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      {children}
    </div>
  );
}
