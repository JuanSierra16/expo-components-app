import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import { allRoutes } from "@/constants/Routes";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemeChangerProvider } from "@/presentation/context/ThemeChangerContext";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  const backgrounColor = useThemeColor({}, "background");
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgrounColor, flex: 1 }}
    >
      <ThemeChangerProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgrounColor,
            },
            headerStyle: {
              backgroundColor: backgrounColor,
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "",
            }}
          />

          {allRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{
                title: route.title,
                headerShown: !route.title.includes("Slides"),
              }}
            />
          ))}
        </Stack>
        <StatusBar style="auto" />
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}
