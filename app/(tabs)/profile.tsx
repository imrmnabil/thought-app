import { Alert, View, Image, ScrollView } from "react-native";
import { Button, Text } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/GlobalProvider";
import { getUserProfile, signOut } from "@/lib/supabase";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const { session, setSession, setIsLoggedIn } = useGlobalContext();
  const [profile, setProfile] = useState<any>(null);

  if (session) {
    getUserProfile(session.user.id).then((result: any) => {
      // console.log("result: ",result)
      if (result) setProfile(result[0]);
    });
  }

  const submit = async () => {
    try {
      await signOut();
      setSession(null);
      setIsLoggedIn(false);
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };
  // console.log("Profile: ",profile)
  return (
    <SafeAreaView className="h-full w-full">
      <ScrollView className="h-full w-full">
        <View className=" h-full w-full items-center mt-7">
          <View className="h-fit w-fit rounded-full overflow-hidden">
            <Image
              width={140}
              height={140}
              source={{ uri: profile?.avatar_url }}
            />
          </View>
          <Text className="text-3xl font-semibold">{profile?.full_name}</Text>
          <Button mode="contained-tonal" onPress={submit}>
            Logout
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
