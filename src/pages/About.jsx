import { Link } from "react-router-dom";

function About() {
  return (
    <section className="page-shell">
      <div className="mx-auto max-w-6xl">
        <div className="text-center fade-up">
          <span className="feature-chip">About Chichie Bridal</span>

          <h1 className="mt-5 text-5xl text-[#2d1d1a] md:text-6xl">
            Making every bride feel beautifully seen
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#5d4f4d]">
            Chichie Bridal Boutique brings together elegant bridal fashion, warm
            personal service, and a collection designed to help every bride feel
            confident, radiant, and unforgettable on her wedding day.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="soft-panel rounded-[2.5rem] p-12 text-center fade-up">
            <p className="text-8xl">👰</p>

            <h2 className="mt-6 text-4xl text-[#2d1d1a]">Your special moment</h2>

            <p className="mt-4 text-lg leading-8 text-[#5d4f4d]">
              Elegant bridal fashion created to celebrate love, detail, and beautiful memories.
            </p>
          </div>

          <div className="fade-up" style={{ animationDelay: "100ms" }}>
            <h2 className="text-4xl text-[#2d1d1a]">Our story</h2>

            <p className="mt-5 leading-8 text-[#5d4f4d]">
              Chichie Bridal Boutique was created to make beautiful bridal fashion
              more accessible. We curate a thoughtfully selected collection of gowns
              that can be hired at affordable prices without compromising style or quality.
            </p>

            <p className="mt-5 leading-8 text-[#5d4f4d]">
              Our goal is simple: help every bride discover a dress that reflects her personality,
              style, and dream celebration.
            </p>

            <Link
              to="/dresses"
              className="mt-8 inline-block rounded-full bg-[#2d1d1a] px-7 py-4 text-base font-bold text-white transition duration-300 hover:bg-[#9a4d5c]"
            >
              Explore our dresses
            </Link>
          </div>
        </div>

        <div className="mt-20 fade-up">
          <h2 className="text-center text-4xl text-[#2d1d1a]">Why choose us?</h2>

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {[
              { icon: "✨", title: "Elegant collection", text: "Thoughtfully selected gowns designed to help you look and feel your best." },
              { icon: "💍", title: "Affordable hiring", text: "Beautiful bridal looks without the high cost of purchasing a dress." },
              { icon: "❤️", title: "Personal service", text: "Friendly guidance to help you choose the perfect gown for your celebration." },
            ].map((item) => (
              <div key={item.title} className="soft-panel rounded-[2rem] p-8 text-center">
                <p className="text-5xl">{item.icon}</p>
                <h3 className="mt-5 text-2xl text-[#2d1d1a]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#5d4f4d]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;