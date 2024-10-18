import { View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import Auth from "@/components/Auth";
import { useSupabase } from "@/lib/useSupabase";
import { getAllPosts } from "@/lib/supabase";
import { Database } from "@/database.types";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Redirect } from "expo-router";
import { useGlobalContext } from "@/context/GlobalProvider";
import AppBar from "@/components/AppBar";

type Post = Database["public"]["Tables"]["posts"]["Row"];
const Home = () => {
  const globalContext = useGlobalContext();
  if (!globalContext) {
    return <Redirect href="/" />;
  }
  const { profile } = globalContext;
  const { data, refetch } = useSupabase(getAllPosts);
  const posts = data as unknown as Post[] | null;

  return (
    <>
    <View className="h-full w-full bg-blue-400">
    <AppBar avatar_url={profile?.avatar_url}/>
      <ScrollView className="w-full px-4">
        <View>
          {posts && posts.map((post, index)=>(
            <Text key={index}>{post.user_id}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
    </>
  );
};

export default Home;
