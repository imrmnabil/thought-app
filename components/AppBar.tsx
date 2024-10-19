import * as React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Appbar, Text, useTheme } from "react-native-paper";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

interface Props {
  avatar_url: string | null | undefined;
}

const AppBar = ({ avatar_url }: Props) => {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Appbar.Header style={{}}>
      <Appbar.Content title=".Mind" titleStyle={{fontFamily:'Poppins_600SemiBold'}}/>
      <TouchableOpacity className="h-fit w-fit rounded-full overflow-hidden mr-4">
        <Image
          height={40}
          width={40}
          source={{
            uri:
              avatar_url ??
              "https://wqwzllsqpfeifnbmmcmh.supabase.co/storage/v1/object/public/avatars/default.png",
          }}
        />
      </TouchableOpacity>
    </Appbar.Header>
  );
};

export default AppBar;
