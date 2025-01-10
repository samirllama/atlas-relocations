export default function HeroStatic() {
  const heroContent = {
    preTitle: "Established 1981",
    title: "Atlas International Relocations",
    subtitle: "Your Premier Relocation Partner in Nepal",
    callToActions: [
      {
        label: "Discover Our Services",
        link: "/services",
      },
      {
        label: "Contact Us",
        link: "/contact",
      },
    ],
  }

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="inline-flex relative before:absolute before:inset-0 before:bg-purple-500 before:blur-md">
                <span className="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out relative">
                  {heroContent.preTitle}
                </span>
              </div>
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              data-aos="fade-down"
            >
              {heroContent.title}
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-500 mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {heroContent.subtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row justify-center gap-4"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {heroContent.callToActions.map((cta, index) => (
                <a
                  key={index}
                  href={cta.link}
                  className={`px-8 py-3 rounded-lg font-medium transition-all ${
                    index === 0
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
