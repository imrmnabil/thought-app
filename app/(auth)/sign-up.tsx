import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import InputeTextField from "@/components/InputTextField";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  Icon,
  IconButton,
  SegmentedButtons,
  Text,
  useTheme,
} from "react-native-paper";
import { Redirect, router } from "expo-router";
import { signUpProcess, signUpWithEmail } from "@/lib/supabase";
import { useGlobalContext } from "@/context/GlobalProvider";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export type SignupFormState = {
  handle: string;
  email: string;
  password: string;
  avatar: any;
  fullname: string;
  date_of_birth: Date;
  gender: "male" | "female" | "other";
};

const SignUp = () => {
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.setFullYear(today.getFullYear() - 18)
  );
  const [form, setForm] = useState<SignupFormState>({
    handle: "",
    email: "",
    password: "",
    avatar: null,
    fullname: "",
    date_of_birth: eighteenYearsAgo,
    gender: "male",
  });
  const theme = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { checkSessionState, isLoading, isLoggedIn, session } =
    useGlobalContext();

  const submit = async () => {
    // !(
    //   form.email &&
    //   form.password &&
    //   form.handle &&
    //   form.avatar &&
    //   form.date_of_birth &&
    //   form.gender
    // )
    if (
      !(
        form.email &&
        form.password &&
        form.handle &&
        form.avatar &&
        form.date_of_birth &&
        form.gender
      )
    ) {
      Alert.alert("Error", "Please type all the fields!");
    } else {
      setIsSubmitting(true);
      try {
        await signUpProcess(form);
        checkSessionState();
      } catch (error: any) {
        Alert.alert("Error", error.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const pickAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      aspect: [1, 1],
      base64: true,
    });
    if (result.canceled) {
      Alert.alert("Canceled");
    } else {
      setForm({ ...form, avatar: result.assets[0] });
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
            Create a new account
          </Text>
          <View className="w-full h-fit mt-7 space-y-4">
            <Text className="px-2">Primary Infrmations</Text>
            <View className="h-fit w-full">
              <InputeTextField
                handleChangeText={(e: string) => {
                  setForm({ ...form, handle: e });
                }}
                text={form.handle}
                label="Username"
              />
            </View>
            <View className="h-fit w-full">
              <InputeTextField
                handleChangeText={(e: string) => {
                  setForm({ ...form, email: e });
                }}
                text={form.email}
                label="Email"
              />
            </View>
            <View className="h-fit w-full">
              <InputeTextField
                handleChangeText={(e: string) => {
                  setForm({ ...form, password: e });
                }}
                text={form.password}
                label="Password"
              />
            </View>
          </View>
          <View className="w-full h-fit mt-7 space-y-4">
            <Text className="px-2">Personal Details</Text>
            <View className="h-fit w-full">
              <InputeTextField
                handleChangeText={(e: string) => {
                  setForm({ ...form, fullname: e });
                }}
                text={form.fullname}
                label="Full Name"
              />
            </View>
            <View className="h-fit w-full">
              <TouchableOpacity
                onPress={() => {
                  setShowDatePicker(true);
                }}
              >
                <InputeTextField
                  handleChangeText={(e: string) => {
                    setForm({ ...form, password: e });
                  }}
                  text={form.date_of_birth.toLocaleDateString("en-GB", {
                    dateStyle: "long",
                  })}
                  label="Date of Birth"
                  notEditable={true}
                />
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={form.date_of_birth}
                  mode={"date"}
                  maximumDate={eighteenYearsAgo}
                  is24Hour={true}
                  onChange={(event, date) => {
                    setShowDatePicker(false);
                    if (date) {
                      setForm({ ...form, date_of_birth: date });
                    }
                  }}
                />
              )}
            </View>
            <View className="h-fit w-full">
              <SegmentedButtons
                density="regular"
                value={form.gender}
                onValueChange={(value) => {
                  setForm({
                    ...form,
                    gender:
                      value === "male"
                        ? "male"
                        : value === "female"
                        ? "female"
                        : "other",
                  });
                }}
                buttons={[
                  {
                    value: "male",
                    label: "Man",
                    icon: "gender-male",
                  },
                  {
                    value: "female",
                    label: "Woman",
                    icon: "gender-female",
                  },
                  { value: "other", label: "Other", icon: "gender-non-binary" },
                ]}
              />
            </View>
          </View>
          <View className="h-fit w-full mt-7 space-y-2">
            <Text className="px-2">Profile Picture</Text>
            {form.avatar ? (
              <View
                onPress={pickAvatar}
                className="h-80 w-full justify-center items-center rounded-3xl"
                style={{ backgroundColor: theme.colors.elevation.level1 }}
              >
                <View className="h-60 w-60 rounded-full overflow-hidden">
                  <Image
                    className="h-full w-full"
                    source={{ uri: form.avatar.uri }}
                  />
                  <TouchableOpacity className="absolute h-20 w-full bg-black/50 bottom-0 justify-center items-center" onPress={pickAvatar}>
                    <Icon size={40} source="camera" color="#999999" />
                  </TouchableOpacity>
                </View>
                <IconButton
                  icon="close"
                  className="absolute top-2 right-2"
                  onPress={() => setForm({ ...form, avatar: null })}
                />
              </View>
            ) : (
              <TouchableOpacity
                onPress={pickAvatar}
                className="h-40 w-full justify-center items-center rounded-3xl"
                style={{ backgroundColor: theme.colors.surfaceVariant }}
              >
                <Icon source="camera" size={40} />
                <Text>Upload an Image</Text>
              </TouchableOpacity>
            )}
          </View>
          <View className="h-fit w-full mt-7">
            <Button
              className="w-full"
              mode="contained"
              contentStyle={{ paddingVertical: 4, alignItems: "center" }}
              labelStyle={{ fontSize: 18 }}
              style={{
                borderRadius: 999,
                backgroundColor: theme.colors.primary,
              }}
              onPress={submit}
              disabled={isSubmitting}
            >
              Sign Up
            </Button>
          </View>
          <View className="h-fit self-center py-2 flex-row items-center space-x-1">
            <Text className="text-sm">Have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                router.navigate("/(auth)/sign-in");
              }}
            >
              <Text className="text-sm" style={{ color: theme.colors.primary }}>
                Login
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
export default SignUp;
