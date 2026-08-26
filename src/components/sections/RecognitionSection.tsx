import { profileData } from "@/data/profileData";

export default function RecognitionSection() {
  const { recognition } = profileData;

  return (
    <section id="recognition" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#B91C1C] uppercase">
            05 / Honors & Distinctions
          </span>
          <div className="h-[1px] bg-zinc-300 flex-1 max-w-24" />
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-900 font-normal leading-tight">
            Recognition & Academic Honors
          </h2>
          <p className="text-zinc-600 mt-3 text-sm sm:text-base">
            National and international accolades acknowledging pedagogical leadership and academic merit.
          </p>
        </div>

        {/* Vertical Timeline with Thin Red Lines & Numerical Markers */}
        <div className="max-w-3xl relative">
          {/* Vertical continuous line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-6 w-[1px] bg-zinc-300 -translate-x-1/2" />

          <div className="space-y-12">
            {recognition.map((award, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 sm:gap-10 group"
              >
                {/* Small Red Numerical Marker */}
                <div className="relative z-10 w-8 h-8 sm:w-12 sm:h-12 rounded-none bg-white border border-zinc-300 flex items-center justify-center font-mono text-xs sm:text-sm font-bold text-[#B91C1C] group-hover:border-[#B91C1C] group-hover:bg-[#B91C1C] group-hover:text-white transition-all shadow-xs shrink-0">
                  0{index + 1}
                </div>

                {/* Content Block */}
                <div className="bg-white border border-zinc-200 p-6 sm:p-8 flex-1 group-hover:border-zinc-400 transition-colors shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#B91C1C] font-semibold">
                      {award.year} • {award.category}
                    </span>
                  </div>

                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-zinc-900 leading-snug">
                    {award.title}
                  </h3>

                  <div className="font-serif text-sm sm:text-base text-zinc-700 font-medium italic mt-1 mb-3">
                    {award.institution}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
