import { useEffect, useState } from "react";

import boys from "../assets/images/PSSGIRLS.JPG";
import girls from "../assets/images/PSSBOYS.png";

const images = [boys, girls];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      <img
        src={images[index]}
        alt="School slideshow"
        className="w-full max-h-[400px] object-cover rounded-lg "
      />

      <div className="flex justify-center items-center gap-4">

        <button
          onClick={() =>
            setIndex((index - 1 + images.length) % images.length)
          }
          className="bg-[#003366] text-[#FFD700] w-10 h-10 rounded-full text-xl hover:bg-[#FFD700] hover:text-[#003366]"
        >
          &#10094;
        </button>

        <div className="flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-[#003366]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setIndex((index + 1) % images.length)}
          className="bg-[#003366] text-[#FFD700] w-10 h-10 rounded-full text-xl hover:bg-[#FFD700] hover:text-[#003366]"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
