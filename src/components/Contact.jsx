import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-900/50 px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="font-bold uppercase tracking-[4px] text-lime-400">
            Contact Us
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            READY TO
            <span className="block text-lime-400">GET STARTED?</span>
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-zinc-400">
            Have questions about memberships, personal training or our
            facilities? Send us a message and our team will get back to you.
          </p>

          <div className="mt-9 space-y-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-lime-400/10 p-3 text-lime-400">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">Call Us</p>
                <p className="font-semibold">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-lime-400/10 p-3 text-lime-400">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">Email</p>
                <p className="font-semibold">hello@ironfit.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-lime-400/10 p-3 text-lime-400">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">Location</p>
                <p className="font-semibold">Pune, Maharashtra</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-lime-400/10 p-3 text-lime-400">
                <Clock size={20} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">Opening Hours</p>
                <p className="font-semibold">5:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! We will contact you soon.");
          }}
          className="rounded-3xl border border-white/10 bg-zinc-950 p-7 sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-lime-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-lime-400"
            />
          </div>

          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="mt-5 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-lime-400"
          />

          <select className="mt-5 w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-zinc-300 outline-none focus:border-lime-400">
            <option>Membership Enquiry</option>
            <option>Personal Training</option>
            <option>Facilities</option>
            <option>Other</option>
          </select>

          <textarea
            rows="5"
            placeholder="Your Message"
            required
            className="mt-5 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-lime-400"
          />

          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-lime-400 py-4 font-bold text-black transition hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/20"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}