import { MapPin, Phone, Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: "linear-gradient(135deg, #f4f7fa 0%, #e8eef5 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a84c] font-bold text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0a2342] mb-5">
            Start a Conversation
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We would welcome the opportunity to discuss how our services can
            support your organization's maritime operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0a2342] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2342] mb-1">
                    Head Office
                  </h3>
                  <p className="text-gray-500 text-sm">
                    8, Hall Lane, Off Oduduwa Road,
                    <br />
                    G.R.A Apapa, Lagos.
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0a2342] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2342] mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-500 text-sm">+234 (0) 000 000 0000</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0a2342] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a2342] mb-1">
                    Email
                  </h3>
                  <p className="text-gray-500 text-sm">
                    info@mariplusservices.com
                  </p>
                </div>
              </div>
            </div>

            {/* Services note */}
            <div
              className="rounded-3xl p-7 text-white"
              style={{
                background: "linear-gradient(135deg, #0a2342, #0e6b8c)",
              }}
            >
              <MessageSquare className="w-6 h-6 text-[#c9a84c] mb-3" />
              <h3 className="font-bold text-lg mb-2">Ready to Partner?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We look forward to reviewing your expected shipment profile and
                agreeing a service arrangement responsive to your operational
                and commercial priorities.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold text-2xl text-[#0a2342] mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/40 focus:border-[#c9a84c] transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/40 focus:border-[#c9a84c] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/40 focus:border-[#c9a84c] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Your organization"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/40 focus:border-[#c9a84c] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Service of Interest
                </label>
                <select
                  id="service"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/40 focus:border-[#c9a84c] transition-colors bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="disport">Disport Agency Services</option>
                  <option value="protective">Protective Agency Services</option>
                  <option value="chartering">Chartering & Representation</option>
                  <option value="freight">Freight Forwarding</option>
                  <option value="brokerage">Maritime Brokerage</option>
                  <option value="other">Other / General Inquiry</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your maritime and shipping requirements..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/40 focus:border-[#c9a84c] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0a2342] hover:bg-[#0e3d6b] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
