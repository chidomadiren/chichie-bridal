import { Link } from "react-router-dom";
import low from "../assets/low.jpg";
import luxury from "../assets/luxury.jpg";
import sima from "../assets/sima.jpg";
import balls from "../assets/balls.jpg";
import hot from "../assets/hot.jpg";
import nok from "../assets/nok.jpg";

function Dresses() {
  const dresses = [
    {
      id: 1,
      name: "Royal Pearl Gown",
      style: "Classic Wedding Dress",
      price: "$150",
      image: low,
    },
    {
      id: 2,
      name: "Elegant Lace Gown",
      style: "Romantic Bridal Dress",
      price: "$180",
      image: luxury,
    },
    {
      id: 3,
      name: "Golden Grace Gown",
      style: "Luxury Bridal Dress",
      price: "$200",
      image: sima,
    },
    {
      id: 4,
      name: "Golden Gown",
      style: "Bridal Dress",
      price: "$250",
      image: balls,
    },
    {
      id: 5,
      name: "Lily Silk Gown",
      style: "Modern Bridal Dress",
      price: "$140",
      image: nok,
    },
    {
      id: 6,
      name: "Velvet Romance",
      style: "Elegant Wedding Dress",
      price: "$120",
      image: hot,
    },
  ];

  return (
    <section className="page-shell">
      <div className="mx-auto max-w-7xl">
        <div className="text-center fade-up">
          <span className="feature-chip">Our Bridal Collection</span>

          <h1 className="mt-5 text-5xl text-[#2d1d1a] md:text-6xl">
            Find your dream dress
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5d4f4d]">
            Explore gowns that feel dreamy, refined, and crafted to make every bride
            feel stunning from the first look to the final dance.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dresses.map((dress, index) => (
            <article
              key={dress.id}
              className="dress-card fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden">
                <img src={dress.image} alt={dress.name} className="dress-image" />
              </div>

              <div className="p-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#b76e79]">
                  {dress.style}
                </p>

                <h2 className="mt-3 text-3xl text-[#2d1d1a]">{dress.name}</h2>

                <p className="mt-3 text-[0.98rem] leading-7 text-[#5d4f4d]">
                  Beautifully tailored for unforgettable moments and graceful, elegant photos.
                </p>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <p className="text-xl font-extrabold text-[#9a4d5c]">
                    Hire from {dress.price}
                  </p>

                  <Link
                    to={`/contact?dress=${encodeURIComponent(dress.name)}`}
                    className="rounded-full bg-[#2d1d1a] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-[#9a4d5c]"
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dresses;