import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Home from "@/app/(tabs)/home";
import Explore from "@/app/(tabs)/explore";
import Profile from "@/app/(tabs)/profile";

const BottomTab = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: require('@/assets/icons/home.png'),
      unfocusedIcon: require('@/assets/icons/home-outline.png'),
    },
    {
      key: "explore",
      title: "Explore",
      focusedIcon: require('@/assets/icons/planet.png'),
      unfocusedIcon: require('@/assets/icons/planet-outline.png'),
    },
    {
      key: "account",
      title: "Profile",
      focusedIcon: require('@/assets/icons/person.png'),
      unfocusedIcon: require('@/assets/icons/person-outline.png'),
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    explore: Explore,
    account: Profile,
  });

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: "white" }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTab;
