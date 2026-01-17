import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Palette, Users, Calendar, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";  
import heroImage from "../assets/images/IMG_5178.JPG";
import heroImage2 from "../assets/images/PSSBOYS.png";
import heroImage3 from "../assets/images/PSSBOYS2.JPG";
import academicsImage from "../assets/images/PSSGIRLS.JPG";
import creativityImage from "../assets/images/pic.jpg";
import studentLifeImage from "../assets/images/PSSGIRLS2.JPG";



// Highlight cards data
const highlights = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Rigorous curriculum designed to challenge and inspire students to achieve their full potential.",
    image: academicsImage,
    link: "/about",
  },
  {
    icon: Palette,
    title: "Creative Expression",
    description: "Fostering creativity through arts, music, drama, and innovative projects.",
    image: creativityImage,
    link: "/creative-corner",
  },
  {
    icon: Users,
    title: "Vibrant Student Life",
    description: "A supportive community with clubs, sports, and activities for every interest.",
    image: studentLifeImage,
    link: "/gallery",
  },
];

// Quick info cards
const quickInfo = [
  {
    icon: Calendar,
    title: "Upcoming Events",
    text: "Stay updated with school events, parent meetings, and important dates.",
    link: "/news",
  },
  {
    icon: Lightbulb,
    title: "Admissions Open",
    text: "Applications for the 2025 academic year are now being accepted.",
    link: "/apply",
  },
  {
    icon: Users,
    title: "Meet Our Team",
    text: "Experienced educators dedicated to bringing out the best in every student.",
    link: "/staff",
  },
];

// Latest news
const latestNews = [
  {
    id: "1",
    title: "Annual Science Fair Winners Announced",
    excerpt: "Congratulations to our talented students who showcased innovative projects at this year's science fair.",
    date: "December 20, 2024",
    category: "Events",
    slug: "/news/science-fair-winners-2024",
  },
  {
    id: "2",
    title: "New Computer Lab Opens",
    excerpt: "State-of-the-art computer lab now available for students to enhance their digital skills.",
    date: "December 15, 2024",
    category: "Facilities",
    slug: "/news/new-computer-lab",
  },
  {
    id: "3",
    title: "Sports Day 2024 Highlights",
    excerpt: "Relive the exciting moments from our annual sports day featuring athletics and team competitions.",
    date: "December 10, 2024",
    category: "Sports",
    slug: "/news/sports-day-2024",
  },
];

const heroImages = [heroImage, heroImage2, heroImage3];


export default function Home() {
const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, 3000); // change image every 5 seconds

  return () => clearInterval(interval);
}, []);


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
        <section className="relative bg-[#003366] text-white min-h-[80vh] lg:min-h-screen">

        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Students at Phafane Secondary School"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Students at Phafane Secondary School"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-[#003366] via-[#003366]/55 to-[#003366]/10" />
          </div>

        </div>
        <div className="relative container mx-auto py-20 md:py-28 lg:py-36 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#FFD700]/20 text-sm font-medium text-[#FFD700]">
            Welcome to Our School
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Phafane Secondary School</h1>
          <p className="mt-2 italic text-xl md:text-2xl text-[#FFD700]">"Excellence and Innovation"</p>
          <p className="mt-6 max-w-xl mx-auto text-lg text-white/80">
            Nurturing tomorrow's leaders through quality education, creative expression, and holistic development. Join a community where every student is empowered to discover their potential.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-6 py-3 font-semibold text-[#003366] hover:bg-[#003366] hover:text-[#FFD700] transition"
            >
              Apply Now <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#FFD700] px-6 py-3 font-semibold text-[#FFD700] hover:bg-[#FFD700] hover:text-[#003366] transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction / Stats */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-[#003366]">Shaping Futures Since 1985</h2>
          <p className="mt-4 text-lg text-[#003366]/70 leading-relaxed">
            Our dedicated educators, modern facilities, and comprehensive curriculum work together to provide students with the knowledge, skills, and values they need to succeed in an ever-changing world.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div>
              <span className="block text-4xl font-bold text-[#003366]">500+</span>
              <span className="text-sm text-[#003366]/70">Students</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-[#003366]">40+</span>
              <span className="text-sm text-[#003366]/70">Educators</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-[#003366]">95%</span>
              <span className="text-sm text-[#003366]/70">Pass Rate</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-[#003366]">39</span>
              <span className="text-sm text-[#003366]/70">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#FFD700]/5 py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-6">Why Choose Phafane?</h2>
          <p className="text-center text-[#003366]/70 mb-12">
            Discover what makes our school a special place for learning and growth.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <div key={h.title} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                <img src={h.image} alt={h.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[#003366]">
                    <h.icon className="h-5 w-5 text-[#FFD700]" /> {h.title}
                  </h3>
                  <p className="mt-2 text-[#003366]/70">{h.description}</p>
                  <Link to={h.link} className="mt-4 inline-block text-[#003366] font-medium hover:text-[#FFD700]">
                    Learn More <ArrowRight className="inline h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          {quickInfo.map((info) => (
            <div key={info.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[#FFD700]/20 mb-4">
                <info.icon className="h-6 w-6 text-[#FFD700]" />
              </div>
              <h3 className="text-lg font-semibold text-[#003366]">{info.title}</h3>
              <p className="mt-2 text-[#003366]/70">{info.text}</p>
              <Link to={info.link} className="mt-4 inline-block text-[#003366] font-medium hover:text-[#FFD700]">
                Read More <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* News Preview */}
      <section className="bg-[#FFD700]/5 py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#003366] mb-6 text-center">Latest News</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <div key={news.id} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-[#003366]">{news.title}</h3>
                <p className="mt-2 text-[#003366]/70">{news.excerpt}</p>
                <p className="mt-2 text-xs text-[#003366]/50">{news.date} | {news.category}</p>
                <Link to={news.slug} className="mt-4 inline-block text-[#003366] font-medium hover:text-[#FFD700]">
                  Read More <ArrowRight className="inline h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003366] py-16 md:py-24 text-center text-white">
        
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Join Our Community?</h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-white/80">
          Take the first step towards an excellent education. Apply today and become part of the Phafane family.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
         

          <Link
            to="/apply"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-6 py-3 font-semibold text-[#003366] hover:bg-[#003366] hover:text-[#FFD700] transition shadow-md hover:shadow-lg"
          >
            Start Your Application
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#FFD700] px-6 py-3 font-semibold hover:bg-[#FFD700] hover:text-[#003366] transition shadow-md hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
        <div className="mt-16 border-t border-white/50" />
      </section>
    </div>
  );
}
