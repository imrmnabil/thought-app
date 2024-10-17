import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '@/app/(tabs)/home';
import Explore from '@/app/(tabs)/explore';
import Profile from '@/app/(tabs)/profile';

const BottomTab = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home-variant', unfocusedIcon: 'home-variant-outline'},
    { key: 'explore', title: 'Explore', focusedIcon: 'compass' , unfocusedIcon: 'compass-outline'},
    { key: 'account', title: 'Profile', focusedIcon: 'account' , unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    explore: Explore,
    account: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTab;