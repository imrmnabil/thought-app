import { Alert, View } from "react-native";
import { Button, Text } from "react-native-paper";
import React, { useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalProvider";
import { getUserProfile, signOut } from "@/lib/supabase";
import { Redirect, router } from "expo-router";

const Profile = () => {
  const { session, setSession, setIsLoggedIn } = useGlobalContext();

  if(session) {
    getUserProfile(session.user.id).then((result)=> {
      console.log("User profile Fetched!", )
    })
  }

  const submit = async () => {
    try {
      await signOut();
      setSession(null)
      setIsLoggedIn(false)
      router.replace('/');
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } 
  };
  return (
    <View className="h-full w-full justify-center items-center">
      <Text className="text-3xl">{session?.user.email}</Text>
      <Button mode="contained-tonal" onPress={submit}>
        Logout
      </Button>
    </View>
  );
};

export default Profile;
