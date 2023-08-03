"use client";

import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function ContextExample() {
  const [theme, setTheme] = useContext(ThemeContext);
  return <main>theme: {theme}</main>;
}
