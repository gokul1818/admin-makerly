import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
const UseAuth = () => {
  const [currentUser, setCurrentuser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentuser(user);
      } else {
        setCurrentuser(null);
      }
    });
  });
  return {
    currentUser,
  };
};

export default UseAuth;
