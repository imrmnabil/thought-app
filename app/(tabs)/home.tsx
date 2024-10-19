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
import PostCard from "@/components/PostCard";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export type Post = {
    body: string | null;
    created_at: string;
    id: string;
    image_url: string | null;
    user_id: string | null;
    profiles: Profile | null;
} | null

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
    <View className="h-full w-full">
    <AppBar avatar_url={profile?.avatar_url}/>
      <ScrollView className="w-full">
        <View className="w-full mt-4">
          {posts && posts.map((post, index)=>(
            <View key={index} className="mb-4 mx-2">
               <PostCard post={post}/>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
    </>
  );
};

export default Home;
