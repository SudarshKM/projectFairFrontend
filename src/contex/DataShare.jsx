import React, { createContext, useState } from "react";

export const addResponseContext = createContext({ });
export const editResponseContext = createContext({ })
export const loggedInResponseContext = createContext();

function DataShare({ children }) {
  const [addResponse, setAddResponse] = useState({});
  const [ editResponse , setEditResponse] = useState({ });
  const [isLoggedIn , setIsLoggedIn] = useState(false)


  return (
    //to access value of the context 
    <addResponseContext.Provider value={{ addResponse, setAddResponse  }}>
     <editResponseContext.Provider value={{editResponse , setEditResponse }} >
      <loggedInResponseContext.Provider value={{isLoggedIn , setIsLoggedIn}}> 
        {children}
        </loggedInResponseContext.Provider>
       </editResponseContext.Provider>
    </addResponseContext.Provider>
  );
}

export default DataShare;
