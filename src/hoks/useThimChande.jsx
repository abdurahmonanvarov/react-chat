import { useEffect, useState } from "react";

const themeFromLocolstorage = () => {
  return localStorage.getItem("theme" || "winter");
};

function useThimChande() {
  const [theme, setTheme] = useState(themeFromLocolstorage());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeColor = () => {
    setTheme((prev) => (prev == "winter" ? "dracula" : "winter"));
  };
  return { changeColor, theme };
}

export default useThimChande;
