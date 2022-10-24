import React from "react";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import RestaurantScreen from "./src/features/restaurants/screens/restaurant-screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

const DATA = ["item1", "item2", "item3", "item4", "item5", "item6"];

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
    Oswald_700Bold,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoaded || !latoLoaded) {
    console.log("not loaded");
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen restaurants={DATA} />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
