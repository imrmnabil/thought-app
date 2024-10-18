import { Alert, AppState } from "react-native";
import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { SignupFormState } from "@/app/(auth)/sign-up";
import { decode } from "base64-arraybuffer";
import { Database } from "@/database.types";

interface userProfileProps {
  handle: string;
  avatar_url: string;
  fullname: string;
  date_of_birth: Date;
  gender: "male" | "female" | "other";
}

export const supabaseConfig = {
  supabaseUrl: "https://wqwzllsqpfeifnbmmcmh.supabase.co",
  supabaseKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indxd3psbHNxcGZlaWZuYm1tY21oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwMjYxMDIsImV4cCI6MjA0NDYwMjEwMn0.0bFCqq7NFBiPSaEByBHeoS_VKo7qQIeGKJLYGjcVsg8",
};

const { supabaseUrl, supabaseKey } = supabaseConfig;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
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
    return session;
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
    return profile;
  } catch (error: any) {
    Alert.alert("Error", error.message);
  }
};

export const uploadFile = async (
  bucket: string,
  path: string,
  mimeType: string,
  file: any
) => {
  console.log("Trying upload");
  try {
    const fileBase64 = decode(file.base64);
    console.log(fileBase64);
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, fileBase64, {
        cacheControl: "3600",
        upsert: false,
        contentType: mimeType,
      });
    if (error) throw new Error(error.message);
    return data.path;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createUserProfile = async (
  { handle, avatar_url, fullname, date_of_birth, gender }: userProfileProps,
  userId: string
) => {
  try {
    const { error } = await supabase
      .from("profiles")
      .update({
        username: handle,
        full_name: fullname,
        avatar_url: avatar_url,
        date_of_birth: date_of_birth,
        gender: gender,
      })
      .eq("id", userId);
    if (error) throw new Error(error.message);
  } catch (error: any) {
    Alert.alert("From Create User Profile", error.message);
  }
};

export const getFileUrl = async (path: string, bucket: string) => {
  try {
    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
  } catch (error: any) {
    Alert.alert(error.message);
  }
};

export const signUpProcess = async ({
  handle,
  email,
  password,
  avatar,
  fullname,
  date_of_birth,
  gender,
}: SignupFormState) => {
  try {
    const session = await signUpWithEmail(email, password);
    if (!session) throw new Error("Session want not created!");
    console.log("Auth Success:", session.user.id);
    console.log(avatar.mimeType);
    const remote_path = await uploadFile(
      "avatars",
      `${Date.now()}.${getFileExtension(avatar.mimeType)}`,
      avatar.mimeType,
      avatar
    );
    console.log("File uploaded:", remote_path);
    const avatar_url = await getFileUrl(remote_path, "avatars");
    console.log("Avatar url fetched:", avatar_url);
    if (!avatar_url) throw new Error("Avatar not uploaded!");
    const user_data = {
      handle: handle,
      avatar_url: avatar_url,
      fullname: fullname,
      date_of_birth: date_of_birth,
      gender: gender,
    };
    await createUserProfile(user_data, session.user.id);
  } catch (error: any) {
    Alert.alert("Error from signUp Process", error.message);
  }
};

const getFileExtension = (mimeType: string): string | null => {
  const parts = mimeType.split("/");
  return parts.length === 2 ? parts[1] : null;
};

export const getAllPosts = async () => {
  try {
    let { data: posts, error } = await supabase.from("posts").select("*");
    if (error) throw new Error(error.message);
    return posts;
  } catch (error: any) {
    Alert.alert(error.message);
  }
};
