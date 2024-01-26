import React, { useState, useEffect } from 'react';
import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

import { Link } from 'component/ui';
import {
  useAuthenticationContext,
  useFiProxy,
  useFormManagerContext,
  useSnackbar,
  useTranslation,
  scopeKeys,
  stringFormat,
} from 'component/base';

import { DataContextProvider } from '../../context/data-context';

import { db } from '../../firebase-config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u1u1u1u1u1u',
};

function AdanaPage() {
  const { executeGet, executeDelete } = useFiProxy();

  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);

  const [tickets, setTickets] = useState([]);
  const ticketsCollectionRef = collection(db, 'tickets');

  const createTicket = async () => {
    await addDoc(ticketsCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateTicket = async (id, age) => {
    const ticketDoc = doc(db, 'tickets', id);
    const newFields = { age: age + 1 };
    await updateDoc(ticketDoc, newFields);
  };

  const deleteTicket = async (id, age) => {
    const ticketDoc = doc(db, 'tickets', id);
    await deleteDoc(ticketDoc);
  };

  useEffect(() => {
    const getTickets = async () => {
      const data = await getDocs(ticketsCollectionRef);
      console.log(data);
      setTickets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTickets();
  }, []);

  // const getData = () => {
  //   executeGet({ fullURL: `https://api.sampleapis.com/cartoons/cartoons2D`, enqueueSnackbarOnError: false }).then(
  //     (response) => {
  //       if (response) {
  //         // setDataSource(response);
  //         console.log(response);
  //       }
  //     },
  //   );
  // };

  return (
    <>
      <h1>AdanaPage</h1>
      <NavigationBar />
      <Link hoverNoneUnderline uiKey={'u5u5u5u5u5u'}>
        TicketList-Link(component/ui)
      </Link>
      {/* <button onClick={getData}>Click</button> */}
      <input
        placeholder="name... "
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      ></input>
      <input
        type="number"
        placeholder="age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      ></input>
      <button onClick={createTicket}>Create User</button>
      {tickets.map((ticket) => {
        return (
          <>
            <h1>name: {ticket.name}</h1>
            <h1>age: {ticket.age}</h1>
            <button onClick={() => updateTicket(ticket.id, ticket.age)}>Increase Age</button>
            <button
              onClick={() => {
                deleteTicket(ticket.id);
              }}
            >
              Delete Ticket
            </button>
          </>
        );
      })}
    </>
  );
}

export default withPage(AdanaPage, { uiMetadata });
