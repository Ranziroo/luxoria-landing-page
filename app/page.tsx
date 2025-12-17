"use client";

export default function Home() {
  return (
    <main className="w-full">

      {/* HOME */}
      <section id="home" className="relative w-full h-screen flex justify-center items-center overflow-hidden">
        <img
          src="https://cloud.famproperties.com/project/large/creek-waters-265855-131346.jpg"
          className="fixed w-full h-full object-cover top-0 left-0"
          alt="Luxury Home"
        />

        <div className="relative z-10 w-full sm:w-3/4 md:w-2/3 text-center px-6 sm:px-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Redefining the Art of Living
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
            More than just a place to live—it is the embodiment of art, comfort,
            and prestige for those who appreciate the finest quality.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="aboutus"
        className="relative w-full min-h-screen flex flex-col md:flex-row items-center
        bg-gradient-to-br from-[#111] via-[#0f0f0f] to-[#141414] overflow-hidden px-6 sm:px-10 py-16 sm:py-24"
      >
        {/* DECORATIVE BIG TEXT */}
        <h2 className="absolute right-4 sm:right-24 bottom-8 sm:bottom-16 text-[80px] sm:text-[140px] font-black tracking-widest
          text-white/5 select-none pointer-events-none">
          LUXURY
        </h2>

        {/* SOFT GOLDEN GLOW */}
        <div className="absolute top-1/4 right-1/4 w-[200px] sm:w-[320px] h-[200px] sm:h-[320px]
          bg-yellow-500/10 blur-[80px] sm:blur-[140px] rounded-full"></div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8 md:gap-16 w-full max-w-7xl mx-auto">

          {/* IMAGE */}
          <div className="relative w-full md:w-[60%]">
            {/* FRAME */}
            <div className="absolute -bottom-2 -left-2 w-full h-full border border-white/10 rounded-2xl"></div>

            <img
              className="relative w-full h-[300px] sm:h-[450px] object-cover rounded-2xl shadow-2xl
              transition-transform duration-700 hover:scale-[1.02]"
              src="https://img.freepik.com/foto-premium/kamar-tidur-mewah-dengan-pemandangan-kota-di-malam-hari_14117-684479.jpg"
              alt="Luxury Interior"
            />

            {/* FLOATING BADGE */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/60 backdrop-blur
              px-4 py-1 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm tracking-widest text-white">
              SIGNATURE
            </div>
          </div>

          {/* TEXT */}
          <div className="relative max-w-full md:max-w-xl pl-0 md:pl-10 mt-10 md:mt-0">
            {/* VERTICAL LINE */}
            <span className="absolute left-0 top-0 h-full w-[1px] bg-white/10"></span>

            <h1 className="uppercase tracking-[0.35em] text-sm sm:text-base text-gray-400">
              About Us
            </h1>

            <div className="w-16 h-[2px] bg-gradient-to-r from-yellow-500 to-yellow-300 mt-4 sm:mt-6"></div>

            <h3 className="mt-6 text-3xl sm:text-5xl lg:text-5xl font-black leading-tight">
              Crafting Timeless <span className="text-yellow-400">Luxury</span>
            </h3>

            <p className="mt-4 sm:mt-8 text-sm sm:text-lg text-gray-300 leading-relaxed">
              We deliver more than just <span className="text-white font-semibold">luxury</span>.
              Every detail is crafted with precision, combining elegant design,
              premium materials, and uncompromising comfort.
            </p>

            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-300 leading-relaxed">
              With a vision of creating exceptional living experiences,
              we are committed to setting a new standard in refined living.
            </p>

            <p className="mt-4 sm:mt-8 text-xs sm:text-sm italic text-gray-400">
              — Designed for those who value excellence
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative w-full min-h-screen bg-[#0e0e0e] overflow-hidden px-6 sm:px-10 py-16 sm:py-24"
      >
        {/* DECORATIVE TEXT */}
        <h2 className="absolute right-4 sm:right-24 top-8 sm:top-24 text-[80px] sm:text-[140px] font-black tracking-widest
          text-white/5 select-none pointer-events-none">
          SERVICES
        </h2>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="max-w-2xl mb-16 sm:mb-24">
            <h1 className="uppercase tracking-[0.35em] text-sm sm:text-base text-gray-400">
              Services
            </h1>

            <div className="w-16 h-[2px] bg-gradient-to-r from-yellow-500 to-yellow-300 mt-4 sm:mt-6"></div>

            <h3 className="mt-4 sm:mt-6 text-3xl sm:text-5xl font-black leading-tight">
              Our Signature <span className="text-yellow-400">Services</span>
            </h3>

            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-300 leading-relaxed">
              Every service is thoughtfully crafted to deliver refined elegance,
              unmatched comfort, and a truly exceptional experience.
            </p>
          </div>

          {/* SERVICE ITEMS */}
          {[
            {
              title: "Interior Design",
              desc: "Bespoke interior solutions designed with meticulous attention to detail, premium materials, and timeless aesthetics.",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              order: 1,
            },
            {
              title: "Luxury Property",
              desc: "Curated luxury properties offering exclusivity, comfort, and architectural excellence in every detail.",
              img: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
              order: 2,
            },
            {
              title: "Personalized Living",
              desc: "Tailored living experiences curated around your lifestyle, aspirations, and pursuit of excellence.",
              img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
              order: 3,
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center mb-16 sm:mb-32
      ${service.order % 2 === 0 ? "md:flex md:flex-row-reverse md:gap-16" : "md:flex md:flex-row md:gap-16"}`}
            >
              {/* IMAGE */}
              <div className="relative w-full md:w-1/2">
                <img
                  src={service.img}
                  className="w-full h-[250px] sm:h-[420px] object-cover rounded-2xl transition-transform duration-700 hover:scale-[1.03]"
                  alt={service.title}
                />
                <span className="absolute top-4 sm:top-6 left-4 sm:left-6 text-[48px] sm:text-[72px] font-black text-white/10">
                  0{service.order}
                </span>
              </div>

              {/* TEXT */}
              <div className="relative w-full md:w-1/2 pl-0 md:pl-10 mt-6 md:mt-0">
                <span className="absolute left-0 top-0 h-full w-[1px] bg-white/10"></span>
                <h4 className="text-2xl sm:text-3xl font-semibold">{service.title}</h4>
                <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-300 leading-relaxed">{service.desc}</p>
                <p className="mt-4 sm:mt-6 text-xs sm:text-sm italic text-gray-400">
                  — {service.order === 1
                    ? "Crafted for refined living"
                    : service.order === 2
                      ? "Exclusive by design"
                      : "Designed exclusively for you"}
                </p>
              </div>
            </div>
          ))}


        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative w-full min-h-screen flex flex-col md:flex-row items-center
        bg-gradient-to-br from-[#0d0d0d] via-[#0b0b0b] to-[#111] overflow-hidden px-6 sm:px-10 py-16 sm:py-24"
      >
        {/* DECORATIVE TEXT */}
        <h2 className="absolute left-4 sm:left-24 bottom-8 sm:bottom-24 text-[80px] sm:text-[140px] font-black tracking-widest
          text-white/5 select-none pointer-events-none">
          CONTACT
        </h2>

        {/* SOFT GOLD GLOW */}
        <div className="absolute top-1/4 left-1/4 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-yellow-500/10 blur-[80px] sm:blur-[140px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="uppercase tracking-[0.35em] text-sm sm:text-base text-gray-400">Contact</h1>
            <div className="w-16 h-[2px] bg-gradient-to-r from-yellow-500 to-yellow-300 mt-4 sm:mt-6"></div>
            <h3 className="mt-4 sm:mt-6 text-3xl sm:text-5xl font-black leading-tight">
              Request a <span className="text-yellow-400">Private Consultation</span>
            </h3>
            <p className="mt-4 sm:mt-8 text-sm sm:text-lg text-gray-300 leading-relaxed max-w-md">
              Connect with our team to discuss bespoke solutions, personalized services, and exclusive opportunities crafted to your vision.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-6 sm:mt-12 space-y-4 text-gray-300">
              {[
                { label: "Email", value: "contact@luxoria.com" },
                { label: "Phone", value: "+62 812 3456 7890" },
                { label: "Location", value: "Jakarta, Indonesia" },
              ].map((info, idx) => (
                <p key={idx}>
                  <span className="text-gray-400 block text-sm uppercase tracking-widest">{info.label}</span>
                  {info.value}
                </p>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="relative">
            {/* FRAME */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl"></div>

            <form className="relative p-6 sm:p-10 space-y-6 sm:space-y-8">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
              />
              <textarea
                rows={4}
                placeholder="Tell us about your vision"
                className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-yellow-400 transition"
              ></textarea>
              <button
                type="submit"
                className="mt-4 sm:mt-6 inline-flex items-center gap-4 text-sm sm:text-base uppercase tracking-widest text-white hover:text-yellow-400 transition"
              >
                Submit Request
                <span className="block w-8 sm:w-10 h-[1px] bg-white group-hover:bg-yellow-400"></span>
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}
