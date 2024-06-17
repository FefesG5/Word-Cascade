import { useRouter } from "next/router";
import React, { ComponentType, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext"; // Adjust the path as needed
import Spinner from "@/components/Spinner/Spinner";

const WithAuth = <P extends object>(
  WrappedComponent: ComponentType<P>,
): ComponentType<P> => {
  const RequiresAuthentication: React.FC<P> = (props) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/signin"); // Redirect to login if not authenticated
      }
    }, [user, loading, router]);

    if (loading || !user) {
      return <Spinner />; // Or any loading indicator
    }

    return <WrappedComponent {...props} />;
  };

  return RequiresAuthentication;
};

export default WithAuth;
