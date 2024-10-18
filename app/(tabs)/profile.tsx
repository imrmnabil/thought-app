import { Alert, View, Image, ScrollView } from "react-native";
import { Button, Text } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/GlobalProvider";
import { getUserProfile, signOut } from "@/lib/supabase";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Database } from "@/database.types";

type Profile = Database['public']['Tables']['profiles']['Row']

const Profile = () => {
  const globalContext = useGlobalContext();
  if (!globalContext) {
    return <Redirect href='/home' />
  }
  const { session, setSession, setIsLoggedIn, profile } = globalContext;

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
              source={{ uri: profile?.avatar_url ?? 'https://wqwzllsqpfeifnbmmcmh.supabase.co/storage/v1/object/public/avatars/default.png' }}
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
