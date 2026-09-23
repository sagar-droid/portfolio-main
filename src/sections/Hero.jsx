import React, { Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const HeroCanvas = lazy(() => import("../components/HeroCanvas"));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I help brands and startups gain an
unfair advantage through premium
results driven webs/apps`;
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Bugs? What are those?"}
        title={"Sagar Adhikari"}
        text={text}
        textColor={"text-black"}
        headingTag="h1"
      />
      <figure
        className="absolute inset-0 -z-50 pointer-events-none"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Suspense fallback={null}>
          <HeroCanvas isMobile={isMobile} />
        </Suspense>
      </figure>
    </section>
  );
};

export default Hero;
