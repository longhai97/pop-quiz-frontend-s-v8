
import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../config/firebase";

const auth = getAuth(app)

export function useAuth() {
  const [user, setUser] = React.useState<any>();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  };
}
