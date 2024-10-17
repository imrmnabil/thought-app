import * as React from "react";
import { Appbar, useTheme } from "react-native-paper";

const AppBar = () => (
  <Appbar.Header elevated style={{}}>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="Title" />
    <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
);

export default AppBar;
