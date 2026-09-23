import React from "react";

export const Icon = ({ icon, className = "", ...props }) => {
  switch (icon) {
    case "lucide:arrow-up-right":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      );

    case "lucide:arrow-left":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      );

    case "material-symbols-light:square":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M4 20V4h16v16H4Zm1-1h14V5H5v14Z" />
        </svg>
      );

    case "mdi:star-four-points":
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
          {...props}
        >
          <path d="M12 1L9 9L1 12L9 15L12 23L15 15L23 12L15 9L12 1Z" />
        </svg>
      );
  }
};

export default Icon;
