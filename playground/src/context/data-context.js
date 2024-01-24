import React from 'react';
import { createContext, useState, useContext } from 'react';
export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

// import { DUMMY_DATA as initialTickets } from '../dummy-data.js';
const initialTickets = [
  {
    id: 123,
    date: '22-01-2024',
    name: 'CTO Cihan Yıldız',
    status: 'new',
    requestType: 'Problem',
    requestMessage: "Skype doesn't work!",
    note: 'message',
  },
  {
    id: 456,
    date: '22-01-2024',
    name: 'Erhan Akkaya',
    status: 'new',
    requestType: 'Problem',
    requestMessage: "Skype doesn't work!",
    note: 'message',
  },
  {
    id: 789,
    date: '22-01-2024',
    name: 'Ceyhan',
    status: 'closed',
    requestType: 'Problem',
    requestMessage: "Skype doesn't work!",
    note: 'message',
  },
];

export const DataContextProvider = ({ children }) => {
  const [tickets, setTickets] = useState(initialTickets);
  const [foundTicket, setFoundTicket] = useState({});

  const handleDeleteTicket = (id) => {
    const updatedTickets = tickets.filter((ticket) => ticket.id !== id);
    setTickets(updatedTickets);
  };

  const handleAddTicket = (ticketObject) => {
    setTickets([...tickets, { ...ticketObject }]);
  };

  const findInTickets = (ticketID) => {
    setFoundTicket(tickets.find((item) => item.id == ticketID));
  };

  const handleTicketStatusChange = (id, value) => {
    const updatedTickets = tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: value };
      }
      return ticket;
    });
    setTickets(updatedTickets);
  };

  const handleInputChange = (id, fieldName, value) => {
    const updatedTickets = tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, [fieldName]: value };
      }
      return ticket;
    });
    setTickets(updatedTickets);
  };

  return (
    <DataContext.Provider
      value={{
        tickets,
        setTickets,
        handleAddTicket,
        handleTicketStatusChange,
        handleInputChange,
        handleDeleteTicket,
        findInTickets,
        foundTicket,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
