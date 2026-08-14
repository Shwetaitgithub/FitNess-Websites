import { Dumbbell } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-lime-400 p-2 text-black">
              <Dumbbell size={20} />
            </div>

            <span className="text-xl font-black tracking-wide">
              IRON<span className="text-lime-400">FIT</span>
            </span>
          </div>

          <p className="mt-3 max-w-sm text-sm text-zinc-500">
            Stronger body. Stronger mind. Stronger life.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex gap-3">

          <a
            href="#"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
          >
            <FaInstagram size={19} />
          </a>

          <a
            href="#"
            aria-label="Facebook"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
          >
            <FaYoutube size={20} />
          </a>

          <a
            href="#"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
          >
            <FaWhatsapp size={19} />
          </a>

        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-center">
        <p className="text-sm text-zinc-600">
          © 2026 IRONFIT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}