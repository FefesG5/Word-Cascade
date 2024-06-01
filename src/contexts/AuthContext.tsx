import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { supabase } from "../../supabaseClient";
import { User } from "@supabase/supabase-js";

interface AuthContextProps {
  user: User | null;
  signUp: (email: string, password: string, role: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  role: string | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error.message);
      } else {
        console.log("Fetched session data:", data);
        setUser(data.session?.user || null);
        setRole(data.session?.user?.user_metadata?.role || null);
      }
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log("Auth state change detected:", session);
        setUser(session?.user || null);
        setRole(session?.user?.user_metadata?.role || null);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string, role: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role,
        },
      },
    });
    if (error) throw error;
    console.log("Signed up user data:", data);
    setUser(data.user);
    setRole(role);
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    console.log("Signed in user data:", data);
    setUser(data.user);
    setRole(data.user.user_metadata?.role || null);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
