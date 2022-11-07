import { createContext, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user,setUser] = useState({username:" "});
  const[reg,setReg]=useState({name:" ",email:" ",phoneno:" "})
 return <UserContext.Provider value={{user,setUser,reg,setReg}}>{children}</UserContext.Provider>;
};