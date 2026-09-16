import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileContactBar from './components/MobileContactBar';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Destinations from './sections/Destinations';
import Packages from './sections/Packages';
import WhyUs from './sections/WhyUs';
import Fleet from './sections/Fleet';
import Gallery from './sections/Gallery';
import ContactCTA from './sections/ContactCTA';
import CTABanner from './sections/CTABanner';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Destinations />
        <Packages />
        <WhyUs />
        <Fleet />
        <Gallery />
        <ContactCTA />
        <CTABanner />
        <Contact />
      </main>
      <Footer />

      {/* Global floating & sticky UI — rendered outside main for correct stacking */}
      <BackToTop />
      <WhatsAppButton />
      <MobileContactBar />
    </>
  );
}
