import {
  Target,
  Eye,
  DollarSign,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const commitments = [
  {
    icon: Target,
    title: "Accountability",
    description:
      "We accept clear responsibility for the operational stages entrusted to us and manage them with diligence, urgency, and follow-through across both reefer and dry container consignments.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We handle cargo, documentation, and associated financial processes with openness and professionalism, ensuring clarity in communication and process status at every stage.",
  },
  {
    icon: DollarSign,
    title: "Cost Awareness",
    description:
      "Our operating model is designed to reduce unnecessary exposure to demurrage, storage charges, and delay-related inefficiencies across all import categories.",
  },
  {
    icon: Zap,
    title: "Responsiveness",
    description:
      "Emerging issues are reported promptly, together with the action being taken to resolve them — you are never left to discover problems after they have become costly.",
  },
  {
    icon: CheckCircle2,
    title: "Reliability",
    description:
      "A service defined by consistency, operational discipline, and measurable attention to turnaround, cargo protection, and communication quality across every shipment.",
  },
];

const reasons = [
  "Reduce avoidable dwell time",
  "Limit exposure to demurrage and storage charges",
  "Safeguard the integrity of temperature-sensitive cargo",
  "Ensure dry containers are progressed efficiently",
  "Maintain compliance and provide management visibility",
  "Take operational ownership rather than wait passively",
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a84c] font-bold text-sm tracking-widest uppercase mb-4">
            Our Commitment
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0a2342] mb-5">
            Why Choose Mariplus?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Choosing Mariplus means choosing a partner positioned to protect
            your operational and commercial interests with consistency.
          </p>
        </div>

        {/* Commitments grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {commitments.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-7 rounded-3xl bg-[#f4f7fa] hover:bg-[#0a2342] group transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#c9a84c]/20 group-hover:bg-[#c9a84c]/30 flex items-center justify-center mb-5 transition-colors">
                <Icon className="w-6 h-6 text-[#c9a84c]" />
              </div>
              <h3 className="font-bold text-xl text-[#0a2342] group-hover:text-white mb-3 transition-colors">
                {title}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors flex-1">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* What choosing Mariplus means */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-3xl overflow-hidden bg-[#0a2342] p-10 lg:p-14">
          <div>
            <h3 className="text-3xl font-extrabold text-white mb-5">
              In Practical Terms, Choosing Mariplus Means:
            </h3>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-[#c9a84c] mt-1 shrink-0" />
                  <span className="text-sm">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <blockquote className="text-white text-lg font-medium leading-relaxed mb-6">
              "We submit this proposal not as a generic offer of clearing
              services, but as a structured commitment to deliver dependable
              execution, commercial protection, and operational confidence
              regardless of the category of logistics operations required."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center">
                <span className="text-[#0a2342] font-black text-sm">MA</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Alhaji Adams A. Musa</p>
                <p className="text-gray-400 text-xs">Executive Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
