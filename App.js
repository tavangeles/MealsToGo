import React from "react";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import RestaurantScreen from "./src/features/restaurants/screens/restaurant-screen";
const DATA = ["item1", "item2", "item3", "item4", "item5", "item6"];

export default function App() {
  return (
    <>
      <RestaurantScreen restaurants={DATA} />
      <ExpoStatusBar style="auto" />
    </>
  );
}
