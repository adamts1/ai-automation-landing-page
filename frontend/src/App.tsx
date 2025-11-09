import { FC } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Technologies from './components/Technologies';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Technologies />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
