import React from "react";
import {
  StyleProp,
  ViewStyle,
  Animated,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
  SafeAreaView,
  I18nManager,
  View,
} from "react-native";
import { AnimatedFAB } from "react-native-paper";

const CreatePostButton = ({
  animatedValue,
  visible,
  extended,
  label,
  animateFrom,
  style,
  iconMode,
}) => {
  const [isExtended, setIsExtended] = React.useState(true);

  const fabStyle = { ['right']: 16 };

  return (
      <AnimatedFAB
        icon={"pencil-outline"}
        label={"Write  "}
        extended={true}
        onPress={() => console.log("Pressed")}
        visible={visible}
        animateFrom={"right"}
        iconMode={"dynamic"}
        style={[styles.fabStyle, style, fabStyle]}
      />
  );
};

export default CreatePostButton;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: "absolute",
  },
});
