import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getStorage, setStorage } from "@/utils/storage";
import { setTheme, setWidthFullScreen } from "@/utils/theme";

const initialWidthFullScreen = getStorage("isWidthFullScreen");
const initialDarkMode = getStorage("isDarkMode");

export const useSettingsStore = defineStore("settings", () => {
  let isDarkMode = ref(initialDarkMode || false);
  let isWidthFullScreen = ref(initialWidthFullScreen || false);

  const theme = computed({
    get: () => {
      setTheme(isDarkMode.value);
      return isDarkMode.value;
    },
    set: (value) => {
      setTheme(value);
      setStorage("isDarkMode", value);
    },
  });

  const width = computed({
    get() {
      setWidthFullScreen(isWidthFullScreen.value);
      return isWidthFullScreen.value;
    },
    set(value) {
      setWidthFullScreen(value);
      setStorage("isWidthFullScreen", value);
    },
  });

  return {
    theme,
    width,
  };
});
