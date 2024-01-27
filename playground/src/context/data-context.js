import React, { useCallback } from 'react';
import { createContext, useState, useContext, useEffect } from 'react';
export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

// import { DUMMY_DATA as initialTickets } from '../dummy-data.js';

import { db } from '../firebase-config';
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export const DataContextProvider = ({ children }) => {
  console.log('<data-context/>');

  const [tickets, setTickets] = useState(null);
  const [ticket, setTicket] = useState(null);
  const [lastCreatedTicketId, setLastCreatedTicketId] = useState('');

  const ticketsCollectionRef = collection(db, 'tickets');

  const createTicket = async (newTicket) => {
    const docRef = await addDoc(ticketsCollectionRef, { ...newTicket });

    setLastCreatedTicketId(docRef.id);
    console.log('lastCreatedTicketId datacontext:', lastCreatedTicketId);
  };
  const readTicket = useCallback((ticketId) => {
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
  }, []);

  useEffect(() => {
    const getTickets = async () => {
      console.log('getTickets run in useEffect');
      const data = await getDocs(ticketsCollectionRef);
      console.log(data);
      setTickets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTickets();
  }, []);

  const updateTicket = async (id, fieldName, value) => {
    console.log('Ticket updated!');
    const ticketDoc = doc(db, 'tickets', id);
    const newFields = {
      [fieldName]: value,
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

  const handleInputChange = (id, fieldName, value) => {
    const updatedTickets = tickets.map((ticket) => {
      if (ticket.id == id) {
        console.log('handleInputChange: bulunan id', ticket.id);
        return { ...ticket, [fieldName]: value };
      }
      return ticket;
    });
    setTickets(updatedTickets);
    setTicket((prevTicket) => ({ ...prevTicket, [fieldName]: value }));
  };

  return (
    <DataContext.Provider
      value={{
        tickets,
        setTickets,
        handleAddTicket,
        handleInputChange,
        handleDeleteTicket,
        createTicket,
        deleteTicket,
        readTicket,
        updateTicket,
        ticket,
        setLastCreatedTicketId,
        lastCreatedTicketId,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
