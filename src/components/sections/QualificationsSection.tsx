import { profileData } from "@/data/profileData";
import { GraduationCap, ShieldCheck, CheckCircle, Award } from "lucide-react";

export default function QualificationsSection() {
  const { qualifications } = profileData;

  return (
    <section id="qualifications" className="py-20 lg:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#B91C1C] uppercase">
            04 / Credentials
          </span>
          <div className="h-[1px] bg-zinc-300 flex-1 max-w-24" />
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-900 font-normal leading-tight">
            Qualifications & Professional Credentials
          </h2>
          <p className="text-zinc-600 mt-3 text-sm sm:text-base">
            Advanced academic degrees combined with internationally accredited health, safety, and compliance credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Block: Academic Qualifications */}
          <div className="lg:col-span-6 bg-[#FAFAFA] border border-zinc-200 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-200">
                <GraduationCap className="w-6 h-6 text-[#B91C1C]" />
                <h3 className="font-serif text-2xl text-zinc-900 font-normal">
                  Academic Qualifications
                </h3>
              </div>

              <div className="space-y-4">
                {qualifications.academic.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-zinc-200 p-5 flex items-start justify-between"
                  >
                    <div>
                      <div className="font-sans text-xl font-bold text-zinc-900">
                        {item.degree}
                      </div>
                      <div className="font-serif text-sm text-zinc-800 font-medium mt-0.5">
                        {item.title}
                      </div>
                      <div className="text-xs text-zinc-500 mt-1">
                        Specialization: {item.focus}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-100 px-2 py-1">
                      Conferred
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-200 text-xs text-zinc-500 font-medium">
              Interdisciplinary foundation across management sciences & occupational safety.
            </div>
          </div>

          {/* Right Block: Professional Certifications */}
          <div className="lg:col-span-6 bg-white border-2 border-zinc-900 p-8 flex flex-col justify-between relative shadow-sm">
            {/* Top Red Accent Marker */}
            <div className="absolute -top-3 right-8 bg-[#B91C1C] text-white text-[10px] font-mono font-bold tracking-widest px-3 py-1 uppercase">
              International Distinction
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-200">
                <ShieldCheck className="w-6 h-6 text-[#B91C1C]" />
                <div>
                  <h3 className="font-serif text-2xl text-zinc-900 font-normal">
                    Professional Certifications
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono">
                    UK & Global Accreditation
                  </p>
                </div>
              </div>

              {/* Main Headline Credential */}
              <div className="bg-red-50/60 border border-red-200 p-5 mb-6">
                <div className="text-[11px] font-mono tracking-wider uppercase text-[#B91C1C] font-semibold">
                  Chartered Body Membership
                </div>
                <div className="font-sans text-2xl font-bold text-zinc-900 mt-1">
                  {qualifications.certifications.headline}
                </div>
                <div className="text-xs text-zinc-600 mt-0.5">
                  {qualifications.certifications.subline}
                </div>
              </div>

              {/* Approved Trainer List */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-3">
                  {qualifications.certifications.approvedTrainerTitle}:
                </div>
                <div className="space-y-3">
                  {qualifications.certifications.approvedBodies.map((body, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3.5 bg-zinc-50 border border-zinc-200 text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-zinc-900 text-sm w-14">
                          {body.code}
                        </span>
                        <span className="text-zinc-700">{body.name}</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#B91C1C] bg-white border border-red-200 px-2 py-0.5 font-semibold">
                        {body.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-200 text-xs text-zinc-500">
              Authorized to conduct international certifications & institutional audits.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
