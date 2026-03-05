import { DARK_THEME_CLASS, THEME_STORAGE_KEY } from "@/configs/constants.ts";
import { type Theme, themeSchema } from "@/schemas/theme.ts";

export const toggleTheme = () => {
  const classes = document.documentElement.classList;
  if (classes.contains(DARK_THEME_CLASS)) {
    classes.remove(DARK_THEME_CLASS);
  } else {
    classes.add(DARK_THEME_CLASS);
  }
};

export const getPreferredTheme = (): Theme => {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const result = themeSchema.safeParse(storedTheme);
  if (result.success) {
    return result.data;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const setTheme = (document: Document) => {
  const theme = getPreferredTheme();
  if (theme === "dark") {
    document.documentElement.classList.add(DARK_THEME_CLASS);
  }

  const observer = new MutationObserver(() => {
    const isDark =
      document.documentElement.classList.contains(DARK_THEME_CLASS);
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
};
