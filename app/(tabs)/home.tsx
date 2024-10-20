import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import React, { useEffect, useState } from "react";
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
import CreatePostButton from "@/components/CreatePostButton";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export type Post = {
  body: string | null;
  created_at: string;
  id: string;
  image_url: string | null;
  user_id: string | null;
  profiles: Profile | null;
} | null;

const Home = () => {
  const globalContext = useGlobalContext();
  if (!globalContext) {
    return <Redirect href="/" />;
  }
  const { profile } = globalContext;
  const { data, refetch } = useSupabase(getAllPosts);
  const posts = data as unknown as Post[] | null;

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch().then(() => {
      setRefreshing(false);
    });
  }, []);

  //Scroll Logics......................
  const [lastScrollY, setLastScrollY] = useState(0);
  const [fabVisible, setFabVisible] = useState(true);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    const velocity = event.nativeEvent.velocity?.y || 0;
    if (currentScrollY < 50) {
      setFabVisible(true);
    } else {
      if (velocity > 1 || velocity < -1) {
        if (currentScrollY <= lastScrollY) {
          setFabVisible(true);
        } else {
          setFabVisible(false);
        }
      }
    }
    setLastScrollY(currentScrollY);
  };

  return (
    <>
      <View className="h-full w-full">
        <AppBar avatar_url={profile?.avatar_url} />
        <ScrollView
          onMomentumScrollBegin={handleScroll}
          onMomentumScrollEnd={handleScroll}
          className="w-full"
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View className="w-full mt-4">
            {posts &&
              posts.map((post, index) => (
                <View key={index} className="mb-4 mx-2">
                  <PostCard post={post} />
                </View>
              ))}
          </View>
        </ScrollView>
        <CreatePostButton visible={fabVisible} />
      </View>
    </>
  );
};

export default Home;
