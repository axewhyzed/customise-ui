import { createContext, useContext, useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";

type ThemeMode = "light" | "dark" | "custom";

interface CustomColors {
  bg?: string;
  text?: string;
  primary?: string;
}

interface ThemeProviderProps {
  children: ReactNode;
  config?: {
    initialTheme?: ThemeMode;
    customColors?: CustomColors;
  };
}

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode, colors?: CustomColors) => void;
}

// ✅ Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children, config }: ThemeProviderProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const initialTheme = config?.initialTheme || "light";
  const customColors = config?.customColors;
  const [theme, setThemeState] = useState<ThemeMode>(initialTheme);

  const setTheme = (newTheme: ThemeMode, colors?: CustomColors) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.classList.remove("theme-light", "theme-dark", "theme-custom");
    wrapper.classList.add(`theme-${newTheme}`);

    if (newTheme === "custom" && colors) {
      if (colors.bg) wrapper.style.setProperty("--custom-bg", colors.bg);
      if (colors.text) wrapper.style.setProperty("--custom-text", colors.text);
      if (colors.primary) wrapper.style.setProperty("--custom-primary", colors.primary);
    }

    setThemeState(newTheme);
  };

  useEffect(() => {
    setTheme(initialTheme, customColors);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div ref={wrapperRef}>{children}</div>
    </ThemeContext.Provider>
  );
};

// ✅ Hook to consume theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};