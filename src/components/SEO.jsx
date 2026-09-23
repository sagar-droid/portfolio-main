import { useEffect } from "react";

const BASE_URL = "https://sagaradhikari.com.np";
const DEFAULT_TITLE = "Sagar Adhikari | Full-Stack Developer & Creative Technologist";
const DEFAULT_DESCRIPTION =
  "Portfolio of Sagar Adhikari, a Full-Stack Developer crafting high-performance, modern web applications, scalable architectures, and interactive digital experiences.";
const DEFAULT_IMAGE = `${BASE_URL}/images/man.jpg`;

const updateMetaTag = (selector, attribute, value) => {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    const match = selector.match(/meta\[([a-zA-Z:-]+)="([^"]+)"\]/);
    if (match) {
      element.setAttribute(match[1], match[2]);
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
};

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  path = "",
  type = "website",
}) => {
  useEffect(() => {
    // Document title
    document.title = title;

    const fullUrl = `${BASE_URL}${path}`;
    const fullImageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

    // Standard meta tags
    updateMetaTag('meta[name="description"]', "content", description);

    // Open Graph
    updateMetaTag('meta[property="og:title"]', "content", title);
    updateMetaTag('meta[property="og:description"]', "content", description);
    updateMetaTag('meta[property="og:url"]', "content", fullUrl);
    updateMetaTag('meta[property="og:image"]', "content", fullImageUrl);
    updateMetaTag('meta[property="og:type"]', "content", type);

    // Twitter Card
    updateMetaTag('meta[name="twitter:title"]', "content", title);
    updateMetaTag('meta[name="twitter:description"]', "content", description);
    updateMetaTag('meta[name="twitter:image"]', "content", fullImageUrl);

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);
  }, [title, description, image, path, type]);

  return null;
};

export default SEO;
