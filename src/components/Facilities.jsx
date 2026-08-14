import {
  Dumbbell,
  HeartPulse,
  Flame,
  Waves,
  Apple,
  ShowerHead,
} from "lucide-react";

const facilities = [
  {
    icon: Dumbbell,
    title: "Strength Zone",
    text: "Premium free weights and strength equipment.",
  },
  {
    icon: HeartPulse,
    title: "Cardio Zone",
    text: "Modern treadmills, cycles and rowing machines.",
  },
  {
    icon: Flame,
    title: "HIIT Studio",
    text: "High intensity training for maximum results.",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    text: "Temperature-controlled swimming facility.",
  },
  {
    icon: Apple,
    title: "Nutrition Bar",
    text: "Healthy shakes, meals and nutrition guidance.",
  },
  {
    icon: ShowerHead,
    title: "Locker Rooms",
    text: "Clean premium changing and shower facilities.",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="bg-zinc-900/50 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-bold uppercase tracking-[4px] text-lime-400">
            Facilities
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            EVERYTHING YOU
            <span className="text-lime-400"> NEED.</span>
          </h2>

          <p className="mt-5 text-zinc-400">
            Train with premium facilities designed to help you perform at your
            best.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-lime-400/40"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-lime-400/10 p-4 text-lime-400 transition group-hover:bg-lime-400 group-hover:text-black">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-zinc-500">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}