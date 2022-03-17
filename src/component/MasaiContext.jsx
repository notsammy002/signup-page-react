import React, { createContext, useState } from "react";

export const MasaiContext = createContext();

export const SignProvider = ({ children }) => {
  const [infro, setInfro, user, setUser ] = useState({});

  return (
    <MasaiContext.Provider value={{ infro, setInfro, user, setUser }}>
      {children}
    </MasaiContext.Provider>
  );
};
