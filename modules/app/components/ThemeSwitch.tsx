"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex items-center justify-center">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-10 h-10 ml-3 rounded hover:bg-slate-100 dark:hover:text-[#397497]"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {/* {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />} */}
      </button>
    </div>
  );
}

export default ThemeSwitch;
