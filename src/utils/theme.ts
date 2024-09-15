// theme.js
export const setTheme = (isDarkMode: boolean) => {
  document.documentElement.setAttribute(
    "data-theme",
    isDarkMode ? "dark" : "light"
  );
};

// 设置全屏宽
export const setWidthFullScreen = async (isFullScreen: boolean) => {
  const app = document.getElementById("layout");

  if (isFullScreen) {
    app?.classList.add("!max-w-full");
  } else {
    app?.classList.remove("!max-w-full");
  }
};
