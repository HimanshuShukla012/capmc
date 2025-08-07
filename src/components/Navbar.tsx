import clsx from "clsx";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const navItems = ["About", "Services", "Contact"];

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);

  const location = useLocation();

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (audioRef.current) {
      isAudioPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";

      if (navRef.current) {
        if (currentScrollY <= 0) {
          setIsNavVisible(true);
          navRef.current.classList.remove("bg-black/50");
          navRef.current.classList.add("bg-transparent");
        } else if (direction === "down") {
          setIsNavVisible(false);
          navRef.current.classList.remove("bg-transparent");
          navRef.current.classList.add("bg-black/50");
        } else if (direction === "up") {
          setIsNavVisible(true);
          navRef.current.classList.remove("bg-transparent");
          navRef.current.classList.add("bg-black/50");
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2,
      });
    }
  }, [isNavVisible]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Main Navbar */}
      <div
        ref={navRef}
        className="fixed inset-x-0 top-4 z-50 h-24 border-none transition-all duration-700 sm:inset-x-6 bg-transparent backdrop-blur-md rounded-xl"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-4">
                <img
                  src="/img/logo.png"
                  alt="logo"
                  className="w-20 cursor-pointer"
                />
                <div className="leading-tight">
                  <div className="text-white font-bold uppercase tracking-wide text-sm sm:text-base">
                    CAPMC CORPORATE CONSULTANCY SERVICES
                  </div>
                  <div className="text-white uppercase text-[10px] sm:text-xs font-semibold">
                    LLC. FZ.
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Nav + Audio */}
            <div className="hidden md:flex h-full items-center">
              <div>
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.toLowerCase()}`}
                    className="nav-hover-btn"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <button
                onClick={toggleAudio}
                className="ml-10 flex items-center space-x-0.5"
              >
                <audio
                  ref={audioRef}
                  className="hidden"
                  src="/audio/loop.mp3"
                  loop
                />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={clsx("indicator-line", {
                      active: isIndicatorActive,
                    })}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                  />
                ))}
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white text-3xl z-50 relative"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </nav>
        </header>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-black/50 backdrop-blur-md z-40 flex flex-col px-8 pt-10 space-y-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-2xl font-semibold border-b border-white/20 pb-2"
            >
              {item}
            </Link>
          ))}

          {/* Audio Toggle Mobile */}
          <div className="mt-6">
            <button onClick={toggleAudio} className="flex items-center space-x-0.5">
              <audio
                ref={audioRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
              <span className="ml-3 text-white">Background Audio</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
