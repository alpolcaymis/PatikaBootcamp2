import { createContext, useState, useContext } from 'react';

export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lastCreatedTicketId, setLastCreatedTicketId] = useState('');

  return (
    <DataContext.Provider
      value={{
        setIsLoggedIn,
        isLoggedIn,
        setLastCreatedTicketId,
        lastCreatedTicketId,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
