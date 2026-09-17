import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Contact() {
  const [searchParams] = useSearchParams();
  const selectedDress = searchParams.get("dress") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    dress: selectedDress,
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSuccessMessage(
      `Thank you, ${formData.name}! Your dress hiring request has been sent successfully. We will contact you soon.`
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      weddingDate: "",
      dress: "",
      message: "",
    });
  };

  return (
    <section className="page-shell">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div className="fade-up">
          <span className="feature-chip">Hire your dream dress</span>

          <h1 className="mt-5 text-5xl text-[#2d1d1a] md:text-6xl">
            Book your bridal gown
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5d4f4d]">
            Complete the form and send us your bridal dress hiring request. Our team will
            contact you to confirm availability and guide you through the next steps.
          </p>

          <div className="mt-10 rounded-[2rem] bg-[#2d1d1a] p-8 text-white shadow-[0_25px_60px_rgba(54,32,35,0.18)]">
            <h2 className="text-3xl text-[#f9ecf0]">Why hire from Chichie Bridal?</h2>

            <div className="mt-6 space-y-4 text-[#f0dfe4]">
              <p>✓ Beautiful and elegant bridal gowns</p>
              <p>✓ Affordable dress hiring options</p>
              <p>✓ Friendly and professional service</p>
              <p>✓ Flattering fits for your unforgettable day</p>
            </div>
          </div>
        </div>

        <div className="soft-panel rounded-[2rem] p-8 md:p-10 fade-up" style={{ animationDelay: "120ms" }}>
          {successMessage && (
            <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block font-semibold text-[#4b352d]">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-[#f1d7dd] bg-white px-4 py-3 outline-none transition focus:border-[#b76e79]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#4b352d]">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="w-full rounded-xl border border-[#f1d7dd] bg-white px-4 py-3 outline-none transition focus:border-[#b76e79]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#4b352d]">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full rounded-xl border border-[#f1d7dd] bg-white px-4 py-3 outline-none transition focus:border-[#b76e79]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#4b352d]">Wedding Date</label>
              <input
                type="date"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#f1d7dd] bg-white px-4 py-3 outline-none transition focus:border-[#b76e79]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#4b352d]">Selected Dress</label>
              <input
                type="text"
                name="dress"
                value={formData.dress}
                onChange={handleChange}
                placeholder="Enter or select a dress"
                required
                className="w-full rounded-xl border border-[#f1d7dd] bg-white px-4 py-3 outline-none transition focus:border-[#b76e79]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#4b352d]">Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us anything else you would like us to know..."
                rows="4"
                className="w-full resize-none rounded-xl border border-[#f1d7dd] bg-white px-4 py-3 outline-none transition focus:border-[#b76e79]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#b76e79] px-6 py-4 text-base font-bold text-white shadow-[0_20px_35px_rgba(183,110,121,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#9b5d69]"
            >
              Send hiring request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;