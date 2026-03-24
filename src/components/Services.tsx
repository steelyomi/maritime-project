import {
  Ship,
  FileText,
  Handshake,
  Package,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Disport Agency Services",
    description:
      "Comprehensive port agency services including vessel coordination, berthing arrangements, and port formalities management for vessel owners and charterers.",
    highlights: [
      "Vessel arrival notifications",
      "Berthing coordination",
      "Port formalities",
      "Crew assistance",
    ],
  },
  {
    icon: FileText,
    title: "Protective Agency Services",
    description:
      "Independent representation and oversight on behalf of vessel owners or charterers to protect their interests during port operations and cargo handling.",
    highlights: [
      "Independent monitoring",
      "Cargo tally verification",
      "Condition reporting",
      "Commercial protection",
    ],
  },
  {
    icon: Handshake,
    title: "Chartering & Ship Owners' Representation",
    description:
      "Expert representation for ship owners and charterers to facilitate vessel movements, negotiate terms, and ensure smooth commercial operations.",
    highlights: [
      "Voyage negotiations",
      "Charter party management",
      "Owner representation",
      "Charterer liaison",
    ],
  },
  {
    icon: Package,
    title: "Freight Forwarding",
    description:
      "End-to-end freight management covering import documentation, customs clearance, and coordination through to final delivery at your facility.",
    highlights: [
      "Documentation handling",
      "Customs clearance",
      "Inland transport",
      "Delivery coordination",
    ],
  },
  {
    icon: BarChart3,
    title: "Maritime Brokerage",
    description:
      "Professional brokerage services connecting cargo owners with vessel operators, negotiating competitive freight rates and contract terms.",
    highlights: [
      "Cargo/vessel matching",
      "Freight rate negotiation",
      "Contract facilitation",
      "Market intelligence",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #f4f7fa 0%, #ffffff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a84c] font-bold text-sm tracking-widest uppercase mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0a2342] mb-5">
            Our Core Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A comprehensive suite of maritime and logistics services designed to
            support every stage of your vessel and cargo operations.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description, highlights }) => (
            <div
              key={title}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#c9a84c]/30 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0a2342] flex items-center justify-center mb-6 group-hover:bg-[#c9a84c] transition-colors duration-300">
                <Icon className="w-7 h-7 text-[#c9a84c] group-hover:text-[#0a2342] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2342] mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                {description}
              </p>
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                    <ArrowRight className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Commodities card */}
          <div className="bg-gradient-to-br from-[#0a2342] to-[#0e6b8c] rounded-3xl p-8 text-white flex flex-col justify-between">
            <div>
              <span className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">
                Commodities Handled
              </span>
              <h3 className="text-2xl font-bold mt-3 mb-4">
                Key Cargo Categories
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                We facilitate efficient movement of a wide range of commodities
                through Nigerian ports.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Rice", "Sugar", "Frozen Fish", "Cement", "General Cargo", "Reefer Containers", "Dry Containers"].map(
                (item) => (
                  <span
                    key={item}
                    className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
