import React from 'react';
import { createContext, useState, useContext } from 'react';
export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

const initialTickets = [
  {
    id: 123,
    date: '22/01/2024',
    name: 'Adana',
    status: 'new',
    note: 'message',
  },
  {
    id: 456,
    date: '22/01/2024',
    name: 'Bursa',
    status: 'new',
    note: 'message',
  },
  {
    id: 789,
    date: '22/01/2024',
    name: 'Ceyhan',
    status: 'closed',
    note: 'message',
  },
];

export const DataContextProvider = ({ children }) => {
  const [tickets, setTickets] = useState(initialTickets);

  const handleDeleteTicket = (id) => {
    const updatedTickets = tickets.filter((ticket) => ticket.id !== id);
    setTickets(updatedTickets);
  };

  return (
    <DataContext.Provider
      value={{
        tickets,
        setTickets,
        handleDeleteTicket,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
