import { Shield, Award, Users, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Licensed & Regulated",
    description:
      "Duly licensed by NIMASA and all relevant maritime regulatory authorities in Nigeria.",
  },
  {
    icon: Award,
    title: "Industry Experience",
    description:
      "Years of operational expertise in Nigerian port procedures, regulatory requirements, and cargo handling.",
  },
  {
    icon: Users,
    title: "Strong Relationships",
    description:
      "Established professional networks with key maritime authorities, port stakeholders, and terminal operators.",
  },
  {
    icon: TrendingUp,
    title: "Commercial Accountability",
    description:
      "Every engagement is structured around reducing landed cost, dwell time, and avoidable delays.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block text-[#c9a84c] font-bold text-sm tracking-widest uppercase mb-4">
              Who We Are
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0a2342] mb-6 leading-tight">
              An Indigenous Maritime Services Company
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <strong className="text-[#0a2342]">
                Mariplus Services Limited
              </strong>{" "}
              is a full-service maritime company duly licensed to operate as a
              Shipping Company, Clearing and Protective Agent with all relevant
              maritime regulatory authorities in Nigeria.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We provide a comprehensive range of maritime and logistics services
              designed to support efficient vessel operations and cargo handling
              within Nigerian ports. We facilitate the movement of key
              commodities such as rice, sugar, frozen fish, cement, and other
              general cargo vessels.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our operational expertise and established relationships with port
              stakeholders enable us to deliver efficient port operations, timely
              vessel turnaround, and reliable cargo handling solutions — reducing
              operational delays and optimizing logistics costs for our clients.
            </p>

            <div className="flex items-center gap-4 p-5 bg-[#f4f7fa] rounded-2xl border-l-4 border-[#c9a84c]">
              <div>
                <p className="font-bold text-[#0a2342]">
                  Alhaji Adams A. Musa
                </p>
                <p className="text-sm text-gray-500">
                  Executive Director, Mariplus Services Limited
                </p>
              </div>
            </div>
          </div>

          {/* Right — highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-[#f4f7fa] hover:bg-[#0a2342] group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/20 group-hover:bg-[#c9a84c]/30 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-[#c9a84c]" />
                </div>
                <h3 className="font-bold text-[#0a2342] group-hover:text-white text-lg mb-2 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
