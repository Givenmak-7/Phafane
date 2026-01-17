import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

import logo from "../assets/images/Logo.jpeg";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Our Staff", path: "/staff" },
  { name: "Apply Now", path: "/apply" },
  { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-[#FFD700]">
      <div className="max-w-7xl mx-auto px-4 py-5 md:py-5">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* School Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-16 w-16 rounded-full flex items-center justify-center bg-white p-1 shadow">
                <img
                  src={logo}
                  alt="Phafane Secondary School logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Phafane</h3>
                <p className="text-xs uppercase tracking-wider text-white/70">
                  Secondary School
                </p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-white/80 max-w-sm">
              <b>Excellence and innovation</b>, nurturing tomorrow&apos;s leaders through
              quality education and holistic development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 transition hover:text-[#FFD700]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#FFD700] mt-0.5" />
                <span>
                  Maadifahlane Village, Moroke, Limpopo
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#FFD700]" />
                <a
                  href="tel:+27792072502"
                  className="hover:text-[#FFD700]"
                >
                  +27 792 072 502
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#FFD700]" />
                <a
                  href="mailto:info@phafaneschool.edu.za"
                  className="hover:text-[#FFD700]"
                >
                  P.O. Box 1518, Driekop 1129
                info@phafaneschool.edu.za
                </a>
              </li>
            <li className="flex items-center gap-3">
                <BookOpen className="h-4 w-4 shrink-0 text-[#FFD700]" />
                <a
                  href="mailto:info@phafane.edu.ls"
                  className="hover:text-[#FFD700]"
                >
                  <b>EMIS No.</b> 925631589
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Connect With Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FFD700] hover:text-[#003366]"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <p className="mt-6 text-xs text-white/60">
              Follow us on social media for updates on school events,
              achievements, and news.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60 text-center">
            © {new Date().getFullYear()} Phafane Secondary School. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-white/60 hover:text-[#FFD700]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-white/60 hover:text-[#FFD700]"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
