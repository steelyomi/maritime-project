import { FileWarning, TrendingDown, Package2, ShieldCheck, AlertTriangle } from "lucide-react";

const risks = [
  {
    icon: FileWarning,
    title: "Documentation Risk Control",
    description:
      "Incomplete or inconsistent shipping documents are among the most common causes of avoidable delay. Our advance review process identifies issues before vessel arrival so corrective action can be taken early, rather than under time pressure at the terminal.",
    tag: "Prevention-Focused",
  },
  {
    icon: TrendingDown,
    title: "Delay & Cost Exposure Management",
    description:
      "Demurrage and storage costs often arise from preventable lapses in follow-up, coordination, or escalation. We mitigate this through pre-arrival readiness, active milestone monitoring, and prompt escalation of issues as they arise.",
    tag: "Cost Control",
  },
  {
    icon: Package2,
    title: "Cargo Integrity & Handling Protection",
    description:
      "For reefer and sensitive consignments, we apply heightened operational attention to reduce deterioration and temperature compromise. For dry containers, our focus is on maintaining handling discipline and preventing unnecessary terminal dwell.",
    tag: "Cargo Safety",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance Discipline",
    description:
      "All declarations, submissions, payments, and inspection activities under our control are managed in accordance with applicable port and customs procedures. Sustainable performance depends on executing process correctly, not bypassing it.",
    tag: "Compliance",
  },
  {
    icon: AlertTriangle,
    title: "Communication & Exception Escalation",
    description:
      "Where issues arise, delay is often worsened by poor visibility. Our clients will not be left to discover problems after they have already become costly. Emerging issues are reported promptly with the action being taken to resolve them.",
    tag: "Visibility",
  },
];

export default function RiskManagement() {
  return (
    <section
      id="risk"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #0a2342 0%, #0e3d6b 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a84c] font-bold text-sm tracking-widest uppercase mb-4">
            Risk & Compliance
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Risk Management & Compliance Assurance
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cargo clearance is exposed to procedural, regulatory, and commercial
            risk. We manage this through a structured, prevention-focused
            approach.
          </p>
        </div>

        {/* Risk cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {risks.map(({ icon: Icon, title, description, tag }) => (
            <div
              key={title}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c9a84c]/30 rounded-3xl p-8 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#c9a84c]/20 group-hover:bg-[#c9a84c]/30 flex items-center justify-center transition-colors">
                  <Icon className="w-6 h-6 text-[#c9a84c]" />
                </div>
                <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase border border-[#c9a84c]/30 rounded-full px-3 py-1">
                  {tag}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}

          {/* Highlight card */}
          <div className="bg-gradient-to-br from-[#c9a84c] to-[#f0d080] rounded-3xl p-8 md:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <div>
              <h3 className="text-[#0a2342] font-extrabold text-2xl mb-4">
                Our Promise
              </h3>
              <p className="text-[#0a2342]/80 text-sm leading-relaxed mb-6">
                Every risk management measure we apply is designed with one
                goal: to ensure that each consignment reaches your facility
                efficiently, compliantly, and without unnecessary cost exposure.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Pre-arrival readiness",
                "Active oversight",
                "Proactive escalation",
                "Documentation control",
              ].map((point) => (
                <div
                  key={point}
                  className="bg-[#0a2342]/10 rounded-xl px-3 py-2 text-[#0a2342] text-xs font-semibold text-center"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
