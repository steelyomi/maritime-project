import { CheckCircle } from "lucide-react";

const needs = [
  {
    number: "01",
    title: "Rapid Cargo Release",
    description:
      "Minimise demurrage, storage costs, and supply interruption through pre-arrival readiness and active process management.",
  },
  {
    number: "02",
    title: "Strict Handling Discipline",
    description:
      "Protect reefer and other temperature-sensitive consignments from deterioration, temperature compromise, and prolonged terminal exposure.",
  },
  {
    number: "03",
    title: "Efficient Dry Container Handling",
    description:
      "Prevent avoidable dwell time and downstream disruption for dry container shipments through disciplined progression.",
  },
  {
    number: "04",
    title: "Regulatory Accuracy",
    description:
      "Prevent avoidable holds, documentation queries, and clearance disruption through rigorous compliance discipline.",
  },
  {
    number: "05",
    title: "Reliable Coordination",
    description:
      "Seamless coordination across multiple port, terminal, and customs interfaces to maintain process momentum.",
  },
  {
    number: "06",
    title: "Management Visibility",
    description:
      "Clear, timely, and decision-useful updates throughout the clearance and delivery cycle — so you plan with confidence.",
  },
];

export default function Needs() {
  return (
    <section
      className="py-24"
      style={{ background: "linear-gradient(135deg, #0a2342 0%, #0e3d6b 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a84c] font-bold text-sm tracking-widest uppercase mb-4">
            Your Requirements
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Understanding Your Needs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            As a business in a supply chain environment where import performance
            must be both time-sensitive and commercially controlled, we
            understand exactly what matters most.
          </p>
        </div>

        {/* Needs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.map(({ number, title, description }) => (
            <div
              key={number}
              className="relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c9a84c]/40 rounded-2xl p-7 transition-all duration-300 group"
            >
              <span className="text-5xl font-black text-white/5 group-hover:text-[#c9a84c]/10 absolute top-4 right-5 transition-colors select-none">
                {number}
              </span>
              <CheckCircle className="w-6 h-6 text-[#c9a84c] mb-4" />
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-14 text-center">
          <div className="inline-block bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-2xl px-8 py-6 max-w-3xl">
            <p className="text-white text-lg font-medium leading-relaxed">
              "Your business requires more than a conventional clearing agent.
              You require an{" "}
              <span className="text-[#c9a84c] font-bold">
                operational partner
              </span>{" "}
              with the capacity to coordinate efficiently across port, terminal,
              and customs interfaces."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
