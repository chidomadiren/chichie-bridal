import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import low from "../assets/low.jpg";
import luxury from "../assets/luxury.jpg";
import hot from "../assets/hot.jpg";
import balls from "../assets/balls.jpg";

const featuredLooks = [
  {
    name: "Ivory Romance",
    label: "Best Seller",
    description: "Soft, romantic draping designed for graceful entrances.",
    image: low,
  },
  {
    name: "Golden Hour Glow",
    label: "Luxury Edit",
    description: "A luminous silhouette with regal sparkle and modern elegance.",
    image: luxury,
  },
  {
    name: "Silk Statement",
    label: "New Arrival",
    description: "Statement bridal details paired with effortless sophistication.",
    image: hot,
  },
  {
    name: "Dream Lace",
    label: "Signature",
    description: "Classic lace texture for a timeless celebration of love.",
    image: balls,
  },
];

function Home() {
  const [activeLook, setActiveLook] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLook((current) => (current + 1) % featuredLooks.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="page-shell overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-2 md:grid-cols-2 md:px-6">
        <div className="fade-up">
          <span className="feature-chip">Bridal Elegance</span>

          <h1 className="mt-6 text-5xl font-bold leading-[0.9] text-[#2d1d1a] md:text-7xl">
            Your dream dress
            <span className="block text-[#c77284]">awaits beautifully.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5d4f4d]">
            Discover graceful bridal gowns for hire and find a look that feels
            elevated, romantic, and unmistakably yours for your unforgettable day.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/dresses"
              className="rounded-full bg-[#b76e79] px-8 py-4 text-base font-bold text-white shadow-[0_20px_40px_rgba(183,110,121,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#9b5d69]"
            >
              View Dresses
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-[#b76e79] bg-white/80 px-8 py-4 text-base font-bold text-[#8d5261] transition duration-300 hover:-translate-y-1 hover:bg-[#b76e79] hover:text-white"
            >
              Hire a Dress
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-[#4a3633]">
            <div>
              <p className="text-3xl font-extrabold text-[#2d1d1a]">250+</p>
              <span className="mt-1 block text-[#6d5c59]">Brides styled</span>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#2d1d1a]">4.9/5</p>
              <span className="mt-1 block text-[#6d5c59]">Client rating</span>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#2d1d1a]">24h</p>
              <span className="mt-1 block text-[#6d5c59]">Fast response</span>
            </div>
          </div>
        </div>

        <div className="hero-visual fade-up" style={{ animationDelay: "200ms" }}>
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-[#f7dfe4] via-[#f8efe9] to-[#fceef0] blur-3xl opacity-70" />

          <div className="relative min-h-[560px] overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/60 p-4 shadow-[0_35px_90px_rgba(98,62,66,0.15)] backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(255,255,255,0.06)_35%,_rgba(255,255,255,0)_80%)]" />

            {featuredLooks.map((look, index) => (
              <img
                key={look.name}
                src={look.image}
                alt={look.name}
                className={`hero-image ${index === activeLook ? "active" : ""}`}
              />
            ))}

            <div className="absolute inset-x-8 bottom-8 z-10 rounded-[2rem] border border-white/60 bg-white/75 p-5 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full bg-[#f6e7ea] px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-[#9a4d5c]">
                    {featuredLooks[activeLook].label}
                  </span>
                  <h2 className="mt-3 text-3xl text-[#2d1d1a] md:text-4xl">
                    {featuredLooks[activeLook].name}
                  </h2>
                </div>
                <span className="rounded-full border border-[#eecdd5] bg-[#fffaf8] px-4 py-2 text-sm font-bold text-[#8d5261]">
                  Hire from $180
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-[#5d4f4d] md:text-base">
                {featuredLooks[activeLook].description}
              </p>
            </div>
          </div>

          <div className="floating-card left-3 top-6 md:left-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7dfe3] text-xl">
              ✨
            </div>
            <div>
              <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-[#9a4d5c]">
                Signature style
              </p>
              <p className="text-sm font-bold text-[#382621]">Timeless bridal beauty</p>
            </div>
          </div>

          <div className="floating-card bottom-6 right-3 md:right-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4e5d0] text-xl">
              💍
            </div>
            <div>
              <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-[#876a3c]">
                Vanity fit
              </p>
              <p className="text-sm font-bold text-[#382621]">Made to glow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;