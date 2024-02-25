import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    "regular": require("./assets/fonts/Inter-Regular.ttf"),
    "bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [fontsLoaded]);
  // Initally return null instead of <AppLoading />
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
