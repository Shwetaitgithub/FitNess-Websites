const images = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85",
];

export default function Gallery() {
  return (
    <section id="gallery" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[4px] text-lime-400">
            Gallery
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            INSIDE <span className="text-lime-400">IRONFIT.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image}
              className={`group overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={image}
                alt={`Gym gallery ${index + 1}`}
                className="h-full min-h-64 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}