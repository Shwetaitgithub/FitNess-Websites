import { Award, Users, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-bold uppercase tracking-[4px] text-lime-400">
            About IronFit
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            MORE THAN A
            <span className="block text-lime-400">GYM.</span>
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            IRONFIT is built for people who refuse to settle. Whether you're
            starting your fitness journey or preparing for your next
            competition, our facility gives you everything you need.
          </p>

          <p className="mt-4 leading-8 text-zinc-400">
            Our mission is simple — create an environment where every workout
            makes you stronger than yesterday.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Award className="mb-3 text-lime-400" />
              <h3 className="font-bold">Certified</h3>
              <p className="mt-1 text-xs text-zinc-500">Trainers</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Users className="mb-3 text-lime-400" />
              <h3 className="font-bold">10K+</h3>
              <p className="mt-1 text-xs text-zinc-500">Members</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Target className="mb-3 text-lime-400" />
              <h3 className="font-bold">15+</h3>
              <p className="mt-1 text-xs text-zinc-500">Years</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85"
            alt="Fitness training"
            className="h-[550px] w-full rounded-3xl object-cover"
          />

          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl">
            <p className="text-4xl font-black text-lime-400">15+</p>
            <p className="text-sm text-zinc-400">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}