import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  children?: ReactNode;
}

type GlobalContextType = {
  session: Session | null;
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  checkSessionState: ()=>void;
}

const GlobalContext = createContext<GlobalContextType|null>(null);

export const useGlobalContext = () => useContext(GlobalContext);
export type {GlobalContextType}

const GlobalProvider = ({ children }: Props) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkSessionState = () => {
    setIsLoading(true)
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setSession(session);
        if(session) setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }

  useEffect(() => {
    checkSessionState()
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        session,
        setSession,
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        setIsLoading,
        checkSessionState
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider