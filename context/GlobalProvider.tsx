import { Database } from "@/database.types";
import { getUserProfile, supabase } from "@/lib/supabase";
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
  checkSessionState: () => void;
  profile: Profile | null;
  setProfile: React.Dispatch<React.SetStateAction<Profile | null>>;
};
type Profile = Database["public"]["Tables"]["profiles"]["Row"];

const GlobalContext = createContext<GlobalContextType | null>(null);

export const useGlobalContext = () => useContext(GlobalContext);
export type { GlobalContextType };

const GlobalProvider = ({ children }: Props) => {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkSessionState = () => {
    setIsLoading(true);
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setSession(session);
        if (session) setIsLoggedIn(true);
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
  };

  const checkProfileState = () => {
    if (session) {
      getUserProfile(session.user.id).then((result) => {
        if (result) setProfile(result[0]);
      });
    }
  };

  useEffect(() => {
    checkSessionState();
  }, []);

  useEffect(()=> {
    checkProfileState();
  },[session])

  return (
    <GlobalContext.Provider
      value={{
        session,
        setSession,
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        setIsLoading,
        checkSessionState,
        profile,
        setProfile,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
