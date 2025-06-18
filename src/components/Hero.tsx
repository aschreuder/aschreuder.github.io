
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I am Arnaud Schreuder";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Additional cosmic effects for hero section */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent opacity-50"></div>
      
      <div className="text-center z-10 px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
            {displayText}
            <span className="animate-pulse text-cyan-400">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 animate-fade-in">
            Building digital experiences with modern technology
          </p>
        </div>
        <button
          onClick={scrollToAbout}
          className="mt-12 p-3 rounded-full border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:scale-110 animate-bounce hover:shadow-lg hover:shadow-cyan-400/25"
        >
          <ArrowDown className="text-slate-300 hover:text-cyan-400 transition-colors" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
