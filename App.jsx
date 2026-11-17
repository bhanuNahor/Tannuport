
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Services from "./component/Services/Services";
import Gallery from "./component/Gallery/Gallery";
import BeforeAfter from "./component/BeforeAfter/BeforeAfter";
import Testimonials from "./component/Testimonials/Testimonials";
import Instagram from "./component/Instagram/Instagram";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <BeforeAfter />
        <Testimonials />
        <Instagram />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;