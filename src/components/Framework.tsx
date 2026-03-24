import { Radar, Anchor, ClipboardCheck } from "lucide-react";

const stages = [
  {
    number: "01",
    icon: Radar,
    title: "Pre-Arrival & Documentation",
    color: "#0e6b8c",
    steps: [
      {
        title: "Vessel Tracking",
        description:
          "We track vessel movement from port of loading through to expected arrival, enabling early operational readiness across both reefer and dry container consignments.",
      },
      {
        title: "Documentation Review & Validation",
        description:
          "Our team works with your representatives to obtain and review all import documentation — Bill of Lading, Commercial Invoice, Packing List, Form M — ideally 72 hours prior to arrival.",
      },
      {
        title: "Pre-Arrival Assessment",
        description:
          "We conduct an initial review of applicable duties, inspection requirements, and container category considerations to enable early preparation and reduce last-minute interruptions.",
      },
    ],
  },
  {
    number: "02",
    icon: Anchor,
    title: "Vessel Operations & Cargo Handling",
    color: "#c9a84c",
    steps: [
      {
        title: "Vessel Husbandry",
        description:
          "Active operational engagement with terminals and port stakeholders to support orderly discharge, timely handling, and efficient cargo movement to the appropriate holding area.",
      },
      {
        title: "Cargo Safety",
        description:
          "Our personnel are present on the ground to supervise cargo discharge, reconcile manifested quantities, and monitor the handling chain to reduce errors and mismatch risk.",
      },
      {
        title: "Reefer Container Priority",
        description:
          "Immediate support for power continuity and accelerated examination for reefer consignments. We target delivery within 72 business hours of vessel arrival.",
      },
      {
        title: "Disciplined Handling of Dry Containers",
        description:
          "Structured progression through port processes to prevent unnecessary terminal dwell and ensure dry containers move efficiently through the clearance chain.",
      },
    ],
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Regulatory Completion & Delivery Assurance",
    color: "#2ecc71",
    steps: [
      {
        title: "Customs Processing & Statutory Compliance",
        description:
          "Licensed clearing personnel manage declarations, duty payments, documentation submission, and inspection coordination with accuracy and urgency.",
      },
      {
        title: "Examination Management & Container Release",
        description:
          "We coordinate examinations, follow through with terminal operators, and manage lifting arrangements to maintain process momentum and eliminate avoidable idle time.",
      },
      {
        title: "Inland Transport & Final Delivery",
        description:
          "We arrange inland transportation and last-mile delivery, ensuring your cargo reaches your facility safely and efficiently after port release.",
      },
    ],
  },
];

export default function Framework() {
  return (
    <section id="framework" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a84c] font-bold text-sm tracking-widest uppercase mb-4">
            How We Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0a2342] mb-5">
            Our Service Delivery Framework
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A structured three-stage approach that gives you operational
            confidence from vessel arrival through to final cargo delivery.
          </p>
        </div>

        {/* Stages */}
        <div className="space-y-16">
          {stages.map(({ number, icon: Icon, title, color, steps }, idx) => (
            <div
              key={number}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Stage header */}
              <div
                className={`lg:col-span-3 ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div
                  className="rounded-3xl p-8 text-white sticky top-28"
                  style={{
                    background: `linear-gradient(135deg, #0a2342, ${color})`,
                  }}
                >
                  <span className="text-6xl font-black opacity-20 block leading-none mb-4">
                    {number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold leading-snug">{title}</h3>
                  <p className="text-white/60 text-sm mt-2">
                    Stage {number} of 3
                  </p>
                </div>
              </div>

              {/* Steps */}
              <div
                className={`lg:col-span-9 ${
                  idx % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {steps.map((step) => (
                    <div
                      key={step.title}
                      className="bg-[#f4f7fa] hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 rounded-2xl p-6 transition-all duration-300"
                    >
                      <div
                        className="w-1 h-8 rounded-full mb-4"
                        style={{ background: color }}
                      />
                      <h4 className="font-bold text-[#0a2342] mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
