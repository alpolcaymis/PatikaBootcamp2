import React, { useEffect, useRef, useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Spinner from '../../components/Spinner/Spinner';
import { withPage, PageHeader, BasePage } from 'component/ui';

import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/data-context';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u6u6u6u6u6u',
};
function TicketPage() {
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const { tickets, setTickets, findInTickets, foundTicket } = useDataContext();

  const NoteTextArea = useRef();

  useEffect(() => {
    findInTickets(params.ticketId);
    // setLoading(true);
    // const fetchTicket = async () => {
    //   const ticket = findInTickets(params.ticketId);
    //   if (ticket) {
    //     setTicket(ticket);
    //     console.log('1 if case');
    //     setLoading(false);
    //   } else {
    //     setLoading(false);
    //     console.log('2 else case');
    //   }
    //   console.log('ticket useEffect: ', ticket);
    //   console.log('findInTickets useEffect', findInTickets);
    // };
    // fetchTicket();
  }, [params.ticketId]);

  if (loading) {
    return <Spinner />;
  }

  // const handleInputChange = (id, fieldName, value) => {
  //   const updatedDrinks = drinks.map((drink) => {
  //     if (drink.id === id) {
  //       return { ...drink, [fieldName]: value };
  //     }
  //     return drink;
  //   });
  //   setDrinks(updatedDrinks);
  // };

  return (
    <BasePage title="TicketPage">
      <p>{('params.ticketId : ', params.ticketId)}</p>
      {foundTicket && console.log('foundTicket:', foundTicket)}
      {/* {foundTicket && (
        <>
          <h3>Name: {foundTicket.name}</h3>
          <h3>Request Type : {foundTicket.requestType}</h3>
          <h3>Request Message : {foundTicket.requestMessage}</h3>
          <h3>Status : {foundTicket.status}</h3>

          <div className="foundTicket-desc">
            <h3>Note</h3>
            <textarea ref={NoteTextArea} name="" id="" cols="40" rows="6" placeholder={foundTicket.note}></textarea>
          </div>
        </>
      )} */}
      <button
        onClick={() => {
          findInTickets(params.ticketId);
        }}
      >
        Find Ticket
      </button>

      <NavigationBar />
      <h3>Name: {foundTicket.name}</h3>
      <h3>Request Type : {foundTicket.requestType}</h3>
      <h3>Request Message : {foundTicket.requestMessage}</h3>
      <h3>Status : {foundTicket.status}</h3>

      <div className="foundTicket-desc">
        <h3>Note</h3>
        <textarea ref={NoteTextArea} name="" id="" cols="40" rows="6" placeholder={foundTicket.note}></textarea>
      </div>
    </BasePage>
  );
}

export default withPage(TicketPage, { uiMetadata });
