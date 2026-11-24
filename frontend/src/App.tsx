import { useState } from 'react';
import type { FC } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BusinessProcesses from './components/BusinessProcesses';
import VideoDemo from './components/VideoDemo';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: FC = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    // On mobile the page scrolls inside this box instead of the window, so the
    // browser's toolbar (address bar) stays visible instead of hiding on scroll.
    <div
      id="scroll-root"
      className="bg-[#0D1117] h-[100dvh] overflow-y-auto lg:h-auto lg:min-h-screen lg:overflow-visible"
    >
      <Header />
      <Hero />
      <Services />
      <VideoDemo />
      <BusinessProcesses />
      <About />
      <Contact 
        isBusinessProcessModalOpen={false}
        isChatbotOpen={isChatbotOpen}
        onChatbotOpenChange={setIsChatbotOpen}
      />
      <Footer />
    </div>
  );
};

export default App;
