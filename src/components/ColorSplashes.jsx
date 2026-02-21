export default function ColorSplashes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large blurred Holi color blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-holi-pink/[0.07] blur-3xl animate-float" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-holi-purple/[0.08] blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-holi-green/[0.06] blur-3xl animate-float-slow" />
      <div className="absolute top-[60%] right-10 w-64 h-64 rounded-full bg-holi-orange/[0.07] blur-3xl animate-float" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-holi-blue/[0.06] blur-3xl animate-float-delayed" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-holi-yellow/[0.08] blur-3xl animate-float-slow" />
      <div className="absolute top-[80%] left-10 w-56 h-56 rounded-full bg-holi-magenta/[0.06] blur-3xl animate-float" />
    </div>
  );
}
