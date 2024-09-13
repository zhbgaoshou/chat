import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getStorage, setStorage } from "@/utils/storage";
import { setTheme } from "@/utils/theme";

const initialDarkMode = getStorage("isDarkMode");

export const useSettingsStore = defineStore("settings", () => {
  let isDarkMode = ref(initialDarkMode || false);

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

  return {
    theme,
  };
});
