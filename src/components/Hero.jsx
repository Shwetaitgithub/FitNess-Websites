import { ArrowRight, Play, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=90"
        alt="Gym"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/75" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-300">
            <CheckCircle size={16} />
            #1 Premium Fitness Club
          </div>

          <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-8xl">
            BUILD YOUR
            <span className="block text-lime-400">STRONGEST</span>
            SELF.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            Train harder. Live stronger. Transform your body and mindset with
            world-class equipment, expert trainers and a community that pushes
            you forward.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#plans"
              className="flex items-center justify-center gap-2 rounded-full bg-lime-400 px-7 py-4 font-bold text-black transition hover:scale-105 hover:bg-lime-300"
            >
              Start Your Journey
              <ArrowRight size={19} />
            </a>

            <a
              href="#about"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-bold backdrop-blur transition hover:bg-white/10"
            >
              <Play size={18} />
              Explore Gym
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-white/10 pt-7">
            <div>
              <h3 className="text-3xl font-black text-lime-400">10K+</h3>
              <p className="text-sm text-zinc-400">Members</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-lime-400">25+</h3>
              <p className="text-sm text-zinc-400">Expert Trainers</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-lime-400">15</h3>
              <p className="text-sm text-zinc-400">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}