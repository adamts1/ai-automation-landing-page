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
  const [isBusinessProcessModalOpen, setIsBusinessProcessModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Header />
      <Hero />
      <Services />
      <BusinessProcesses 
        isModalOpen={isBusinessProcessModalOpen}
        setIsModalOpen={setIsBusinessProcessModalOpen}
      />
      <VideoDemo />
      <About />
      <Contact isBusinessProcessModalOpen={isBusinessProcessModalOpen} />
      <Footer />
    </div>
  );
};

export default App;
