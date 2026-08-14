const trainers = [
  {
    name: "Alex Carter",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Sophia Miller",
    role: "Fitness Trainer",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Daniel Brooks",
    role: "HIIT Specialist",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Emma Wilson",
    role: "Yoga Coach",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=85",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-[4px] text-lime-400">
              Our Team
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              MEET YOUR
              <span className="text-lime-400"> COACHES.</span>
            </h2>
          </div>

          <p className="max-w-md text-zinc-400">
            Certified professionals who are dedicated to helping you reach
            your fitness goals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="group">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-96 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              <h3 className="mt-5 text-xl font-bold">{trainer.name}</h3>

              <p className="mt-1 text-sm text-lime-400">{trainer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}