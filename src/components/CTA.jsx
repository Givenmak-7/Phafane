import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="w-full bg-primary py-16 md:py-24 text-center text-white">
      <div className="px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Join Our Community?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/80">
          Take the first step towards an excellent education. Apply today and become part of the Phafane family.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-navy hover:bg-navy hover:text-gold transition"
          >
            Start Your Application
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 font-semibold text-gold hover:bg-gold hover:text-navy transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
