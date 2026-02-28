// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/contactpage";
import AboutUsPage from "./pages/aboutpage";
import ServicesPage from "./pages/servicepage";
import LandingPageSEO from "./pages/LandingPageSEO"
import { getAllLandingPages } from "./data/seo-pages"


// Create global audio instance that persists across route changes
const globalAudio = new Audio('/videos/audio/loop.mp3');

globalAudio.loop = true;

// Define the audio props interface
export interface AudioProps {
  isAudioPlaying: boolean;
  isIndicatorActive: boolean;
  toggleAudio: () => void;
}

function App() {
  // Global audio state that persists across page changes
  const [isAudioPlaying, setIsAudioPlaying] = useState(() => {
    return localStorage.getItem('audioPlaying') === 'true';
  });
  
  const [isIndicatorActive, setIsIndicatorActive] = useState(() => {
    return localStorage.getItem('audioPlaying') === 'true';
  });

  // Global audio toggle function
  const toggleAudio = () => {
    const newState = !isAudioPlaying;
    
    if (newState) {
      globalAudio.play().catch((error) => {
        console.log('Audio play failed:', error);
      });
    } else {
      globalAudio.pause();
    }
    
    setIsAudioPlaying(newState);
    setIsIndicatorActive(newState);
    localStorage.setItem('audioPlaying', newState.toString());
  };

  // Restore audio state when app loads
  useEffect(() => {
    if (isAudioPlaying) {
      // Use a small delay to ensure the audio can play after page load
      setTimeout(() => {
        globalAudio.play().catch((error) => {
          console.log('Audio auto-play failed:', error);
          // Reset state if autoplay fails
          setIsAudioPlaying(false);
          setIsIndicatorActive(false);
          localStorage.setItem('audioPlaying', 'false');
        });
      }, 100);
    }
  }, []);

  // Create audio props object to pass to pages
  const audioProps: AudioProps = {
    isAudioPlaying,
    isIndicatorActive,
    toggleAudio
  };

  return (
    <Router>
      <Routes>
        {/* Pass audio props to each page component */}
        <Route path="/" element={<LandingPage audioProps={audioProps} />} />
        <Route path="/about" element={<AboutUsPage audioProps={audioProps} />} />
        <Route path="/services" element={<ServicesPage audioProps={audioProps} />} />
        <Route path="/contact" element={<ContactPage audioProps={audioProps} />} />
        <Route path="/:slug" element={<LandingPageSEO />} />

      </Routes>
    </Router>
  );
}

export default App;