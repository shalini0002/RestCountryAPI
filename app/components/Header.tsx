'use client';

import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <header
      className="px-6 md:px-24 py-6 flex justify-between items-center shadow"
      style={{
        backgroundColor: "var(--lightbackground)",
        color: "var(--foreground)",
      }}
    >
      <h1 className="font-extrabold text-lg md:text-2xl"
       style={{ color: "var(--foreground)" }}>
        Where in the world?
      </h1>
      <button
        className="flex items-center gap-2 font-semibold hover:"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {isDark ? <IoMoon className="text-xl" /> : <IoMoonOutline className="text-xl" />}
        <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </header>
  );
}
