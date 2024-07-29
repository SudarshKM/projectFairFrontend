import React, { createContext, useState } from "react";

export const addResponseContext = createContext({ });

function DataShare({ children }) {
  const [addResponse, setAddResponse] = useState({});

  return (
    //to access value of the context 
    <addResponseContext.Provider value={{ addResponse, setAddResponse }}>
      {children}
    </addResponseContext.Provider>
  );
}

export default DataShare;
