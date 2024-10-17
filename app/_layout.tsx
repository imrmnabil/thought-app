import { View, Text, useColorScheme } from "react-native";
import React from "react";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { Stack } from "expo-router";
import AppBar from "@/components/AppBar";
import BottomTab from "@/components/BottomTab";
import GlobalProvider from "@/context/GlobalProvider";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };
  console.log(theme.light.primary);
  return (
    <GlobalProvider>
      <PaperProvider theme={paperTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
    </GlobalProvider>
  );
};

export default RootLayout;
