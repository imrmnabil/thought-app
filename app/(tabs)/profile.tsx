import { Alert, View , Image} from "react-native";
import { Button, Text } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/GlobalProvider";
import { getUserProfile, signOut } from "@/lib/supabase";
import { Redirect, router } from "expo-router";

const Profile = () => {
  const { session, setSession, setIsLoggedIn } = useGlobalContext();
  const [profile, setProfile] = useState<any>(null);

  if(session) {
    getUserProfile(session.user.id).then((result:any)=> {
      console.log("result: ",result)
      if(result) setProfile(result[0])
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
  console.log("Profile: ",profile)
  return (
    <View className="h-full w-full justify-center items-center">
      <Text className="text-3xl">{session?.user.email}</Text>
      {profile ? <Image width={400} height={400} source={{uri: profile.avatar_url}}/> : <></>}
      <Button mode="contained-tonal" onPress={submit}>
        Logout
      </Button>
    </View>
  );
};

export default Profile;
