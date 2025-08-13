import { useRef } from "react";
import NavBar from "../components/navbar";
import Hero from "../components/hero";
import Services from "../components/services";
import About from "../components/about";
import Booking from "../components/bookings";
import Pricing from "../components/pricing";

const Homepage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const bookingsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <NavBar 
        scrollToSection={scrollToSection} 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        servicesRef={servicesRef} 
        pricingRef={pricingRef}
        bookingsRef={bookingsRef} 
      />

      <div ref={homeRef}>
        <Hero scrollToSection={scrollToSection} bookingsRef={bookingsRef} />
      </div>

      <About ref={aboutRef} scrollToSection={scrollToSection} bookingsRef={bookingsRef} />

      <Services ref={servicesRef} />

      <Pricing ref={pricingRef} />

      <Booking ref={bookingsRef} />
    </div>
  );
};

export default Homepage;
