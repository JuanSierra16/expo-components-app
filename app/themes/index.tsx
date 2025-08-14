import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";
import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeSwitch from "@/presentation/shared/ThemeSwitch";
import { useState } from "react";

const ThemesScreen = () => {
  const { currentTheme, toggleTheme, setSystemTheme, isSystemTheme } =
    useThemeChangerContext();
  //const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    //setColorScheme(value ? "dark" : "light");
    toggleTheme();
    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemMode(true);
    }
    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemedView margin>
      <ThemeCard className="mt-5">
        <ThemeSwitch
          value={darkModeSettings.darkMode}
          text="Dark Mode"
          className="mb-5"
          onValueChange={setDarkMode}
        />
        <ThemeSwitch
          value={darkModeSettings.systemMode}
          text="System"
          onValueChange={setSystemMode}
        />
      </ThemeCard>
    </ThemedView>
  );
};
export default ThemesScreen;
