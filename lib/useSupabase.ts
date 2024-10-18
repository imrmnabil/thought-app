import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Database } from "@/database.types";

export const useSupabase = (fn: any) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fn();
      setData(response);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => fetchData();

  return { data, isLoading, refetch };
};
