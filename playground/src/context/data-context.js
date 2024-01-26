import React from 'react';
import { createContext, useState, useContext, useEffect } from 'react';
export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

import { DUMMY_DATA as initialTickets } from '../dummy-data.js';

import { db } from '../firebase-config';
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export const DataContextProvider = ({ children }) => {
  const [tickets, setTickets] = useState(initialTickets);
  const [tickets2, setTickets2] = useState(null);
  const [foundTicket, setFoundTicket] = useState({});
  const [ticket, setTicket] = useState(null);

  const ticketsCollectionRef = collection(db, 'tickets');

  const createTicket = async (formData2) => {
    await addDoc(ticketsCollectionRef, {
      formData2,
    });
  };

  const readTicket = (ticketId) => {
    const fetchTicket = async () => {
      const docRef = doc(db, 'tickets', ticketId);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTicket(docSnap.data());
        console.log('first');
      } else {
        console.log('second');
      }
    };
    fetchTicket();
  };

  useEffect(() => {
    const getTickets = async () => {
      const data = await getDocs(ticketsCollectionRef);
      console.log(data);
      setTickets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTickets();
  }, []);

  const updateTicket = async (id, value) => {
    console.log('satus tupdate');
    const ticketDoc = doc(db, 'tickets', id);
    const newFields = {
      status: value,
    };
    await updateDoc(ticketDoc, newFields);
  };

  const deleteTicket = async (id) => {
    const ticketDoc = doc(db, 'tickets', id);
    await deleteDoc(ticketDoc);
  };

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
        createTicket,
        deleteTicket,
        readTicket,
        tickets2,
        setTickets2,
        updateTicket,
        ticket,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// const initialTickets = [
//   {
//     id: 123,
//     date: '22-01-2024',
//     name: 'CTO Cihan Yıldız',
//     status: 'new',
//     requestType: 'Problem',
//     requestMessage: "Skype doesn't work!",
//     note: 'message',
//   },
//   {
//     id: 456,
//     date: '22-01-2024',
//     name: 'Erhan Akkaya',
//     status: 'new',
//     requestType: 'Problem',
//     requestMessage: "Skype doesn't work!",
//     note: 'message',
//   },
//   {
//     id: 789,
//     date: '22-01-2024',
//     name: 'Ceyhan',
//     status: 'closed',
//     requestType: 'Problem',
//     requestMessage: "Skype doesn't work!",
//     note: 'message',
//   },
// ];
