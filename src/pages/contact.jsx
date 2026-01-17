import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Education Street, Maseru, Lesotho",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+266 22 123 456",
    link: "tel:+26622123456",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@phafane.edu.ls",
    link: "mailto:info@phafane.edu.ls",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Mon – Fri: 8:00 AM – 4:30 PM",
  },
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: connect to email / backend / form service
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-[#003366] py-14 md:py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#eeeeef]">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-[#eeeeef]/80 text-lg">
          Get in touch with Phafane Secondary School. We’d love to hear from you.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#003366]">
              Send Us a Message
            </h2>
            <p className="mt-2 text-[#003366]/70">
              Fill out the form below and we’ll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your first name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#003366] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your last name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#003366] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#003366] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="+266 XX XXX XXXX"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#003366] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="What is this regarding?"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#003366] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Type your message here..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#003366] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-6 py-3 font-semibold text-[#003366] hover:bg-[#003366] hover:text-[#FFD700] transition"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#003366]">
              Get in Touch
            </h2>
            <p className="mt-2 text-[#003366]/70">
              Reach out to us through any of the following channels.
            </p>

            <div className="mt-8 space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FFD700]/20">
                    <info.icon className="h-6 w-6 text-[#003366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#003366]">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-[#003366]/70 hover:text-[#003366]"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-[#003366]/70">
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 overflow-hidden rounded-xl border border-gray-200">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">
                    Interactive map will be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-[#003366]/5 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003366]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[#003366]/70">
            Have questions about admissions, fees, or school policies?
            Check our FAQ section or contact our admissions office directly.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-full border border-[#003366] px-6 py-3 font-medium text-[#003366] hover:bg-[#003366] hover:text-white transition">
              View FAQs
            </button>
            <button className="rounded-full bg-[#FFD700] px-6 py-3 font-semibold text-[#003366] hover:bg-[#003366] hover:text-[#FFD700] transition">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
