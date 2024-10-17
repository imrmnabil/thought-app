import { Image, View, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { useTheme, Button } from "react-native-paper";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "@/components/AppBar";
import SearchBar from "@/components/SearchBar";
import InitialSVG from "@/components/SVGs/InitialSVG";
import { Redirect, router } from "expo-router";
import SocialSVG from "@/components/SVGs/SocialSVG";
import IndexSVG from "@/components/SVGs/IndexSVG";
import { useGlobalContext } from "@/context/GlobalProvider";

const index = () => {
  const theme = useTheme();
  const { isLoading, isLoggedIn} = useGlobalContext();
  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  
  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.background }}
      className="h-full"
    >
      <ScrollView>
        <View className="pt-4 px-4 pb-10  h-[100vh] justify-end items-center w-full">
          <View className="w-full h-[320px] px-2 mb-6 mt-7">
            <IndexSVG/>
          </View>
          <Text
            style={{ color: theme.colors.onSurface }}
            className="text-center text-4xl font-bold"
          >
            Let’s Connect Together
          </Text>
          <View className="w-full space-y-5 mt-10">
            <Button
              className="w-full"
              mode="outlined"
              contentStyle={{ paddingVertical: 10, alignItems: "center" }}
              labelStyle={{ fontSize: 20, color: theme.colors.onSurface }}
              style={{ borderRadius: 999 }}
              onPress={() => router.push('/(auth)/sign-in')}
            >
              Login
            </Button>
            <Button
              className="w-full"
              mode='contained'
              contentStyle={{ paddingVertical: 10, alignItems: "center" }}
              labelStyle={{ fontSize: 20}}
              style={{ borderRadius: 999 , backgroundColor:theme.colors.primary}}
              onPress={() => router.push('/(auth)/sign-up')}
            >
              Sign up
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
