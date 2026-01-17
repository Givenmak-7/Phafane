import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/images/IMG_5178.JPG";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-primary text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Students at Phafane Secondary School"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative py-20 md:py-28 lg:py-36 px-6 max-w-7xl mx-auto text-center">
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gold/20 text-sm font-medium text-gold">
          Welcome to Our School
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Phafane Secondary School
        </h1>
        <p className="mt-2 italic text-xl md:text-2xl text-gold">"Excellence and Innovation"</p>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/80">
          Nurturing tomorrow's leaders through quality education, creative expression, and holistic development.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-navy hover:bg-navy hover:text-gold transition"
          >
            Apply Now <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 font-semibold text-gold hover:bg-gold hover:text-navy transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
