import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";

import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";

import Routes from "./src/routes";

export default function App() {
  // fontsLoaded armazena a informação se as fontes já foram carregadas
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });
  // exibe uma imagem de carregamento enquanto as fontes não forem carregadas
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      {/* definir aparência da status bar tanto no ios quando no android */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
