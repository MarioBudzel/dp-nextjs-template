import React from "react";

// Default tailwind breakpoints
const breakpoints = {
  sm: "(max-width: 640px)",
  md: "(max-width: 768px)",
  lg: "(max-width: 1024px)",
  xl: "(max-width: 1280px)",
  "2xl": "(max-width: 1536px)",
};

const widths = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const useBreakpoints = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = React.useState<
    string | undefined
  >("");

  React.useEffect(() => {
    const updateBreakpoint = () => {
      for (const [key, query] of Object.entries(breakpoints)) {
        if (window.matchMedia(query).matches) {
          setCurrentBreakpoint(key);
          return;
        }
        setCurrentBreakpoint("default");
      }
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);

    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  const isBreakpoint = React.useCallback(
    (breakpoint: keyof typeof breakpoints) => {
      if (typeof window === "undefined") return undefined;
      const width = widths[breakpoint];
      return window.innerWidth > width;
    },
    [currentBreakpoint]
  );

  return { currentBreakpoint, isBreakpoint };
};

export default useBreakpoints;
