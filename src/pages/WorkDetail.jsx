import { useEffect, useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
import ContactSummary from "../sections/ContactSummary";

const WorkDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!project) return;
      gsap.from("[data-reveal]", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: containerRef, dependencies: [slug] }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div ref={containerRef} className="flex flex-col text-black">
      {/* hero */}
      <section className="relative flex flex-col justify-end min-h-[70vh] px-6 pt-32 pb-16 overflow-hidden sm:px-10">
        <img
          src={project.bgImage}
          alt=""
          className="absolute inset-0 object-cover w-full h-full -z-10 brightness-[0.35]"
        />
        <Link
          data-reveal
          to="/"
          state={{ scrollTo: "work" }}
          className="inline-flex items-center gap-2 mb-10 text-sm tracking-widest text-white uppercase w-fit hover:opacity-70"
        >
          <Icon icon="lucide:arrow-left" className="size-4" />
          Back to work
        </Link>
        <p
          data-reveal
          className="mb-4 text-sm font-light tracking-[0.5rem] uppercase text-white/70"
        >
          Case Study
        </p>
        <h1
          data-reveal
          className="max-w-4xl text-white uppercase banner-text-responsive"
        >
          {project.name}
        </h1>
      </section>

      {/* overview + meta */}
      <section className="grid gap-10 px-6 py-16 sm:px-10 md:grid-cols-3 md:gap-16">
        <div data-reveal className="md:col-span-2">
          <h2 className="mb-4 text-xs tracking-[0.4rem] uppercase text-black/50">
            Overview
          </h2>
          <p className="text-xl font-light leading-relaxed sm:text-2xl">
            {project.overview || project.description}
          </p>
        </div>
        <div data-reveal className="flex flex-col gap-8">
          <div>
            <h3 className="mb-2 text-xs tracking-[0.4rem] uppercase text-black/50">
              Role
            </h3>
            <p className="font-light">{project.role || "Full-Stack Developer"}</p>
          </div>
          <div>
            <h3 className="mb-2 text-xs tracking-[0.4rem] uppercase text-black/50">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.frameworks.map((framework) => (
                <span
                  key={framework.id}
                  className="px-3 py-1 text-xs uppercase border rounded-full border-black/30"
                >
                  {framework.name}
                </span>
              ))}
            </div>
          </div>
          {project.href && (
            <div>
              <h3 className="mb-2 text-xs tracking-[0.4rem] uppercase text-black/50">
                Live
              </h3>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-light underline underline-offset-4 hover:opacity-70"
              >
                Visit project
                <Icon icon="lucide:arrow-up-right" className="size-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* hero image */}
      <section data-reveal className="px-6 sm:px-10">
        <img
          src={project.image}
          alt={project.name}
          className="w-full rounded-md h-[300px] sm:h-[480px] object-cover"
        />
      </section>

      {/* features */}
      {project.features?.length > 0 && (
        <section className="grid gap-10 px-6 py-16 sm:px-10 md:grid-cols-2 md:gap-16">
          <h2 data-reveal className="text-xs tracking-[0.4rem] uppercase text-black/50">
            Key Features
          </h2>
          <ul data-reveal className="flex flex-col gap-4">
            {project.features.map((feature, index) => (
              <li key={index} className="flex gap-4 font-light leading-relaxed">
                <span className="text-black/40">{String(index + 1).padStart(2, "0")}</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* process / how it was built */}
      {project.process?.length > 0 && (
        <section className="px-6 py-16 border-t sm:px-10 border-black/10">
          <h2 data-reveal className="mb-10 text-xs tracking-[0.4rem] uppercase text-black/50">
            How It Was Built
          </h2>
          <div className="grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
            {project.process.map((step, index) => (
              <div data-reveal key={index} className="flex flex-col gap-2">
                <p className="text-sm text-black/40">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl">{step.title}</h3>
                <p className="font-light leading-relaxed text-black/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* gallery */}
      {project.gallery?.length > 0 && (
        <section className="px-6 py-16 sm:px-10">
          <h2 data-reveal className="mb-10 text-xs tracking-[0.4rem] uppercase text-black/50">
            Gallery
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {project.gallery.map((src, index) => (
              <img
                data-reveal
                key={index}
                src={src}
                alt={`${project.name}-${index}`}
                className="object-cover w-full rounded-md h-72"
              />
            ))}
          </div>
        </section>
      )}

      {/* next project */}
      <section className="px-6 py-20 border-t sm:px-10 border-black/10">
        <p className="mb-4 text-xs tracking-[0.4rem] uppercase text-black/50">
          Next Project
        </p>
        <Link
          to={`/work/${nextProject.slug}`}
          className="inline-flex items-center gap-4 transition-opacity group hover:opacity-70"
        >
          <h2 className="uppercase banner-text-responsive text-[42px] sm:text-[64px] leading-none">
            {nextProject.name}
          </h2>
          <Icon
            icon="lucide:arrow-up-right"
            className="transition-transform size-8 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </section>

      <ContactSummary />
    </div>
  );
};

export default WorkDetail;
