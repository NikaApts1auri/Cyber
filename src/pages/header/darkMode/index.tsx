import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMonitor } from "react-icons/fi"; // აიკონები from react-icons

export default function Modes() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (theme === "system") {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  function toggleTheme(selectedTheme: string): void {
    setTheme(selectedTheme);
  }

  return (

      <DropdownMenu>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => toggleTheme("dark")}>
            <FiMoon className="mr-2" /> Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => toggleTheme("light")}>
            <FiSun className="mr-2" /> Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => toggleTheme("system")}>
            <FiMonitor className="mr-2" /> System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

  );
}
