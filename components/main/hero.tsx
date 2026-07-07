import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen w-full flex-col overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.16),_transparent_26%),linear-gradient(180deg,_rgba(3,0,20,0.2),_rgba(3,0,20,0.85))]" />

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      {/* Animated glowing blobs */}
      <div className="absolute inset-0 z-[-15] flex justify-center items-center overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-cyan-600/30 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[24rem] bg-gradient-to-b from-[#030014] via-[#030014]/40 to-transparent" />

      <HeroContent />
    </section>
  );
};
