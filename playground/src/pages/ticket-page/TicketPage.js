import React, { useEffect, useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Spinner from '../../components/Spinner/Spinner';
import { withPage, PageHeader } from 'component/ui';

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
    <>
      <PageHeader title="TicketPage" />
      <h1>TicketPage</h1>
      <p>{('params.ticketId : ', params.ticketId)}</p>
      {foundTicket && console.log('foundTicket:', foundTicket)}
      <button
        onClick={() => {
          findInTickets(params.ticketId);
        }}
      >
        Find Ticket
      </button>

      <NavigationBar />
      {/* <div className="ticket-desc">
        <h3>Note</h3>
        <textarea ref={NoteTextArea} name="" id="" cols="40" rows="6" placeholder={ticket.note}></textarea>
      </div> */}
    </>
  );
}

export default withPage(TicketPage, { uiMetadata });
