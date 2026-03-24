import { Anchor, MapPin, Phone, Mail, Globe, Link, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a2342] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#c9a84c] rounded-full flex items-center justify-center">
                <Anchor className="w-5 h-5 text-[#0a2342]" />
              </div>
              <div>
                <p className="font-bold text-xl">Mariplus</p>
                <p className="text-[#c9a84c] text-xs tracking-wide">
                  Services Limited
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              An indigenous maritime services company duly licensed to operate
              as a Shipping Company, Clearing and Protective Agent across all
              major Nigerian ports.
            </p>
            <div className="flex gap-3">
              {[Globe, Link, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-[#c9a84c] rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-[#c9a84c]">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                "Disport Agency Services",
                "Protective Agency Services",
                "Chartering & Ship Owners' Rep.",
                "Freight Forwarding",
                "Maritime Brokerage",
                "Customs Clearing",
              ].map((service) => (
                <li key={service} className="hover:text-[#c9a84c] transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Ports */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-[#c9a84c]">
              Operational Ports
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                "Apapa Port, Lagos",
                "Tin Can Island Port",
                "Warri / Koko Port",
                "Port Harcourt Port",
                "Onne Port",
              ].map((port) => (
                <li key={port} className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-[#c9a84c] shrink-0" />
                  {port}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-[#c9a84c]">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a84c] mt-0.5 shrink-0" />
                <span>
                  8, Hall Lane, Off Oduduwa Road,
                  <br />
                  G.R.A Apapa, Lagos.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c9a84c] shrink-0" />
                <span>+234 (0) 000 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c9a84c] shrink-0" />
                <span>info@mariplusservices.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mariplus Services Limited. All rights
            reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Licensed by relevant maritime regulatory authorities in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
