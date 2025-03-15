import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";

function Hero({ scrollToSection, bookingsRef }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="hero-section"
      style={{ maxHeight: "800px", overflow: "hidden" }} // Reduced height
    >
      <Carousel fade interval={3000} className="carousel-container">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.twinbrooksphysiotherapy.ca/wp-content/uploads/2021/04/footer-background.jpg"
            alt="First slide"
            style={{ height: "550px", objectFit: "cover" }} // Adjusted height
          />
          <Carousel.Caption>
            <h3 className="carousel-title">Relaxing Massage</h3>
            <p className="carousel-text">Feel the soothing touch with our relaxing massage services.</p>
            <Button variant="primary" onClick={() => scrollToSection(bookingsRef)}>Book a Session</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.easterncollege.ca/uploads/2022/02/what-is-massage-theraphy.jpg"
            alt="Second slide"
            style={{ height: "550px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3 className="carousel-title">Deep Tissue Therapy</h3>
            <p className="carousel-text">Relieve tension and stress with deep tissue therapy.</p>
            <Button variant="primary" onClick={() => scrollToSection(bookingsRef)}>Book a Session</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.ctfassets.net/hjcv6wdwxsdz/5cODDwoG5rBwrazOzL8jP0/fa75978750363b63fb1036d383d20490/black-man-smiling-getting-back-massage.jpg"
            alt="Third slide"
            style={{ height: "550px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3 className="carousel-title">Body Care Packages</h3>
            <p className="carousel-text">Special packages to renew your mind, body, and soul.</p>
            <Button variant="primary" onClick={() => scrollToSection(bookingsRef)}>Book a Session</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </motion.div>
  );
}

export default Hero;
