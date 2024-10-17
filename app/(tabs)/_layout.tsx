import { View, Text } from "react-native";
import React from "react";
import BottomTab from "@/components/BottomTab";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <View className="h-full">
        <BottomTab/>
    </View>
  );
};

export default TabsLayout;
