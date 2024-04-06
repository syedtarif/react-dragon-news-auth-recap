import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the on state changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

AuthProviders.propTypes = {
  children: PropTypes.node,
};

/**
 * 1. create "AuthContext" with "createContext" and value will be "null" and also export it
 * 2. get "AuthContext.provider" after return and their set a value name authInfo
 * 3. default children and pass it from "AuthContext.Provider"
 * 4. use a state for control user changes state
 * 5. import {getAuth} and sotred it in auth variable
 * 6. make a vaiable named "createUser" and pass their (email, password) and return it by calling "createUserWithEmailAndPassword" from the function which take 3 parameter named (auth, emmail, password)
 * 7. set the "createUser" to "authInfo" variable thus it can share this object with another file. for example: in registration "createUser" will be shared. for get the "createUser" value just call from registration component with "useContext(AuthContext)" and get the "{createUser}" object form registration components
 * 8.create user just by calling "createUser" and pass their (email,password)
 *
 * --------------->next step to set the users innformation to firebase server
 * 9. set a "useEffect" and import "onAuthStateChanged". pass their "auth" and a observer named "currentUser" and set it to "setUser(currentUser)"
 * 10. set a logOut function. and "signOut" call from the function then passt that with "authInfo"
 * 11. for get the user status from navbar components, just call useContext(AuthContext) and destructure the {user} value
 * 12. declare a handleSignOut to implement sign out user
 */
