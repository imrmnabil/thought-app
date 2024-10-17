import { Alert, AppState } from "react-native";
import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

export const supabaseConfig = {
  supabaseUrl: "https://wqwzllsqpfeifnbmmcmh.supabase.co",
  supabaseKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indxd3psbHNxcGZlaWZuYm1tY21oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwMjYxMDIsImV4cCI6MjA0NDYwMjEwMn0.0bFCqq7NFBiPSaEByBHeoS_VKo7qQIeGKJLYGjcVsg8",
};

const { supabaseUrl, supabaseKey } = supabaseConfig;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) throw new Error(error.message);
  } catch (error: any) {
    Alert.alert("Error", error.message);
  }
};

export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) throw new Error(error.message);
    if (!session)
      throw new Error("Please check your inbox for email verification!");
  } catch (error: any) {
    Alert.alert("Error", error.message);
  }
};

export const signOut = async () => {
  try {
    supabase.auth.signOut();
  } catch (error: any) {
    Alert.alert("Error", error.message);
  }
};

export const getUserProfile = async (userId: string) => {
  try {
    let { data: profile, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", userId);
    if (error) throw new Error(error.message);
    console.log(profile);
  } catch (error: any) {
    Alert.alert("Error", error.message);
  }
};

export const uploadFile = async (bucket: string, path: string, file: any) => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (error) throw new Error(error.message);
    console.log(data?.path)
  } catch (error: any) {
    throw new Error(error);
  }
};
