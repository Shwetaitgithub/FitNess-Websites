import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "999",
    description: "Perfect for beginners.",
    features: [
      "Gym Access",
      "Cardio Equipment",
      "Locker Access",
      "Free Fitness Assessment",
    ],
  },
  {
    name: "Pro",
    price: "1,999",
    description: "For serious fitness enthusiasts.",
    popular: true,
    features: [
      "Everything in Basic",
      "Personal Training",
      "Group Classes",
      "Nutrition Consultation",
      "Sauna Access",
    ],
  },
  {
    name: "Elite",
    price: "3,499",
    description: "Complete premium experience.",
    features: [
      "Everything in Pro",
      "Unlimited Personal Training",
      "Premium Locker",
      "Priority Booking",
      "Exclusive Events",
    ],
  },
];

export default function Membership() {
  return (
    <section id="plans" className="bg-zinc-900/50 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-bold uppercase tracking-[4px] text-lime-400">
            Membership
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            CHOOSE YOUR
            <span className="text-lime-400"> PLAN.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 ${
                plan.popular
                  ? "border-lime-400 bg-lime-400 text-black"
                  : "border-white/10 bg-zinc-950"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-black px-4 py-1 text-xs font-bold text-lime-400">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-2xl font-black">{plan.name}</h3>

              <p
                className={`mt-2 text-sm ${
                  plan.popular ? "text-black/60" : "text-zinc-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-7">
                <span className="text-5xl font-black">₹{plan.price}</span>
                <span className="text-sm opacity-60"> / month</span>
              </div>

              <div className="my-8 h-px bg-current opacity-10" />

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check
                      size={18}
                      className={
                        plan.popular ? "text-black" : "text-lime-400"
                      }
                    />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-9 w-full rounded-full py-4 font-bold transition hover:scale-105 ${
                  plan.popular
                    ? "bg-black text-white"
                    : "bg-lime-400 text-black hover:bg-lime-300"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}