/* eslint-disable react/prop-types */
import { AuthContext } from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const data = {
    name: "ISRAK",
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
