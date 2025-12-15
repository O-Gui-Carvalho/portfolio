"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Prevents hydration mismatch
  if (!mounted) return null;

  return (
    <button 
      onClick={toggleTheme} 
      className="hover:bg-white/50 p-1 rounded-sm cursor-pointer transition-colors"
      aria-label="Toggle theme"
    >
      <Image
        src="/icons/mode.svg"
        alt="Theme Switcher"
        width={16}
        height={16}
        className={`transition-all duration-300 ${theme === "dark" ? "invert" : ""}`}
      />
    </button>
  );
}