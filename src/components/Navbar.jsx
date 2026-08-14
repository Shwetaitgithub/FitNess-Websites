import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Facilities", "facilities"],
    ["Trainers", "trainers"],
    ["Plans", "plans"],
    ["Gallery", "gallery"],
    ["Contact", "contact"],
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="rounded-xl bg-lime-400 p-2 text-black">
            <Dumbbell size={22} />
          </div>

          <span className="text-xl font-black tracking-wide">
            IRON<span className="text-lime-400">FIT</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-zinc-300 transition hover:text-lime-400"
            >
              {name}
            </a>
          ))}

          <a
            href="#plans"
            className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold text-black transition hover:scale-105 hover:bg-lime-300"
          >
            Join Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-zinc-950 px-5 py-5 md:hidden">
          {links.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-zinc-300 hover:text-lime-400"
            >
              {name}
            </a>
          ))}

          <a
            href="#plans"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-lime-400 px-5 py-3 text-center font-bold text-black"
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}