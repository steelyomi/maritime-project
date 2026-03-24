import { MapPin, Building2 } from "lucide-react";

const ports = [
  {
    name: "Apapa Port",
    city: "Lagos",
    description:
      "Nigeria's largest and busiest port, handling a significant portion of the country's general and containerised cargo. Our primary operational hub.",
    features: ["Container Terminal", "General Cargo", "Bulk Cargo", "Ro-Ro"],
  },
  {
    name: "Tin Can Island Port",
    city: "Lagos",
    description:
      "A major port in the Lagos port complex dedicated to containerised cargo. We maintain an active presence for both import and export operations.",
    features: ["Container Handling", "Vehicle Terminals", "Dry Bulk", "Break Bulk"],
  },
  {
    name: "Warri / Koko Port",
    city: "Delta State",
    description:
      "A strategic port serving the Niger Delta region, handling general cargo, agricultural products, and key regional commodities.",
    features: ["General Cargo", "Dry Bulk", "Agricultural Products", "Regional Hub"],
  },
  {
    name: "Port Harcourt / Onne Port",
    city: "Rivers State",
    description:
      "A critical port complex in the Niger Delta, serving oil and gas industries, petrochemicals, and general cargo for the South-South region.",
    features: ["Oil & Gas Support", "Container Handling", "Petrochemicals", "General Cargo"],
  },
];

export default function Ports() {
  return (
    <section
      id="ports"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #f4f7fa 0%, #e8eef5 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a84c] font-bold text-sm tracking-widest uppercase mb-4">
            Nationwide Coverage
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0a2342] mb-5">
            Our Operational Ports
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We operate across all major Nigerian ports, ensuring comprehensive
            maritime service coverage from Lagos to the Niger Delta region.
          </p>
        </div>

        {/* Ports grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ports.map((port) => (
            <div
              key={port.name}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg border border-gray-100 hover:border-[#c9a84c]/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#0a2342] flex items-center justify-center shrink-0 group-hover:bg-[#c9a84c] transition-colors duration-300">
                  <Building2 className="w-6 h-6 text-[#c9a84c] group-hover:text-[#0a2342] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a2342]">
                    {port.name}
                  </h3>
                  <p className="text-[#c9a84c] text-sm font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {port.city}
                  </p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {port.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {port.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-[#f4f7fa] text-[#0a2342] text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nigeria map visual placeholder */}
        <div className="mt-12 bg-white rounded-3xl p-10 text-center border border-gray-100 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-[#c9a84c]" />
            <h3 className="font-bold text-xl text-[#0a2342]">
              Nationwide Port Coverage
            </h3>
          </div>
          <p className="text-gray-500 max-w-xl mx-auto">
            With operations spanning Lagos, Delta, and Rivers States, Mariplus
            Services Limited provides truly nationwide maritime service coverage
            across all of Nigeria's major commercial ports.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {ports.map((port) => (
              <div
                key={port.name}
                className="flex items-center gap-2 bg-[#0a2342]/5 px-4 py-2 rounded-full"
              >
                <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                <span className="text-sm font-medium text-[#0a2342]">
                  {port.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
