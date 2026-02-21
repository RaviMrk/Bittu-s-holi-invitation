import { Pichkari, GulalBowl, ColorBalloon, Dhol, ColorPowderHand, Thandai } from "./HoliToys";

export default function ColorSplashes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft color blobs on cream bg */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-holi-pink/[0.06] blur-3xl animate-float" />
      <div className="absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-holi-purple/[0.06] blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 -left-16 w-64 h-64 rounded-full bg-holi-green/[0.05] blur-3xl animate-float-slow" />
      <div className="absolute top-[60%] right-10 w-56 h-56 rounded-full bg-holi-orange/[0.06] blur-3xl animate-float" />
      <div className="absolute bottom-32 left-1/3 w-72 h-72 rounded-full bg-holi-blue/[0.05] blur-3xl animate-float-delayed" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-holi-yellow/[0.08] blur-3xl animate-float-slow" />

      {/* Floating Holi toys */}
      <Pichkari
        className="absolute top-[8%] right-[8%] w-28 md:w-36 opacity-30 animate-float-slow rotate-[-20deg]"
        color1="#ff1493"
        color2="#fbbf24"
      />
      <GulalBowl
        className="absolute top-[35%] left-[3%] w-20 md:w-28 opacity-25 animate-float-delayed"
        color="#ff6b35"
      />
      <ColorBalloon
        className="absolute top-[15%] left-[12%] w-12 md:w-16 opacity-25 animate-float"
        color="#3b82f6"
      />
      <ColorBalloon
        className="absolute top-[10%] left-[18%] w-10 md:w-14 opacity-20 animate-float-delayed"
        color="#ff1493"
      />
      <ColorBalloon
        className="absolute top-[20%] right-[5%] w-10 md:w-12 opacity-20 animate-float-slow"
        color="#10b981"
      />
      <Dhol
        className="absolute bottom-[15%] right-[6%] w-24 md:w-32 opacity-20 animate-wiggle"
      />
      <ColorPowderHand
        className="absolute top-[55%] right-[3%] w-20 md:w-24 opacity-20 animate-float"
        color="#8b5cf6"
      />
      <GulalBowl
        className="absolute bottom-[25%] left-[5%] w-22 md:w-28 opacity-20 animate-float-slow"
        color="#ff1493"
      />
      <Thandai
        className="absolute bottom-[10%] left-[15%] w-16 md:w-20 opacity-20 animate-float-reverse"
      />
      <Pichkari
        className="absolute bottom-[40%] right-[12%] w-20 md:w-24 opacity-15 animate-float rotate-[15deg]"
        color1="#10b981"
        color2="#3b82f6"
      />
    </div>
  );
}
