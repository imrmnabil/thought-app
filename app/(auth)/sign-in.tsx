import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import InputeTextField from "@/components/InputTextField";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, useTheme } from "react-native-paper";
import { Redirect, router } from "expo-router";
import { signInWithEmail } from "@/lib/supabase";
import { useGlobalContext } from "@/context/GlobalProvider";

type FormState = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { checkSessionState, isLoading, isLoggedIn } = useGlobalContext();
  const theme = useTheme();

  const submit = async () => {
    if (!(form.email && form.password)) {
      Alert.alert("Error", "Please type all the fields!");
    } else {
      setIsSubmitting(true);
      try {
        await signInWithEmail(form.email, form.password);
        checkSessionState();
      } catch (error: any) {
        Alert.alert("Error", error.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.replace("/home");
    }
  }, [isLoggedIn, isLoading]);

  return (
    <SafeAreaView
      className="h-full"
      style={{ backgroundColor: theme.colors.background }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View className="pt-4 px-4 pb-10  h-full justify-center items-center w-full">
          <Text className="text-4xl font-bold text-start w-full px-2">
            Login to your account
          </Text>
          <View className="h-fit w-full mt-7">
            <InputeTextField
              handleChangeText={(e: string) => {
                setForm({ ...form, email: e });
              }}
              text={form.email}
              label="Email"
            />
          </View>
          <View className="h-fit w-full mt-4">
            <InputeTextField
              handleChangeText={(e: string) => {
                setForm({ ...form, password: e });
              }}
              text={form.password}
              label="Password"
            />
          </View>
          <View className="h-fit self-start">
            <Button
              mode="text"
              labelStyle={{ fontSize: 14 }}
              onPress={() => {}}
            >
              Forget your password?
            </Button>
          </View>
          <View className="h-fit w-full mt-4">
            <Button
              className="w-full"
              mode='contained'
              contentStyle={{ paddingVertical: 4, alignItems: "center" }}
              labelStyle={{ fontSize: 18 }}
              style={{
                borderRadius: 999,
              }}
              disabled={isSubmitting}
              onPress={submit}
              loading={isSubmitting}
            >
              Log In
            </Button>
          </View>
          <View className="h-fit self-center py-2 flex-row items-center space-x-1">
            <Text className="text-sm">Don't have account?</Text>
            <TouchableOpacity
              onPress={() => {
                router.navigate("/(auth)/sign-up");
              }}
            >
              <Text className="text-sm" style={{ color: theme.colors.primary }}>
                Create one
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SignIn;
