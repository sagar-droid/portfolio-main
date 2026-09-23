import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import Hero from "../sections/Hero";
import Works from "../sections/Works";
import ServiceSummary from "../sections/ServiceSummary";
import Services from "../sections/Services";
import About from "../sections/About";
import ContactSummary from "../sections/ContactSummary";
import Contact from "../sections/Contact";
import SEO from "../components/SEO";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;

    const id = setTimeout(() => {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 800,
        offset: 0,
      });
      navigate(location.pathname, { replace: true, state: {} });
    }, 100);

    return () => clearTimeout(id);
  }, [location, navigate]);

  return (
    <>
      <SEO path="/" />
      <Hero />
      <Works />
      <ServiceSummary />
      <Services />
      <About />
      <ContactSummary />
      <Contact />
    </>
  );
};

export default Home;
