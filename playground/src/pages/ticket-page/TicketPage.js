import React, { useEffect, useState } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Spinner from '../../components/Spinner/Spinner';
import { withPage } from 'component/ui';

import { useParams } from 'react-router-dom';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u6u6u6u6u6u',
};
function TicketPage() {
  const [loading, setLoading] = useState(false);
  const params = useParams();

  // useEffect(() => {
  //   // setLoading(true);
  //   const fetchTicket = async () => {
  //     const ticket = ticketFinder(ticketId);

  //     if (ticket) {
  //       setTicket(ticket);
  //       console.log('1 if case');
  //       setLoading(false);
  //     } else {
  //       setLoading(false);
  //       console.log('2 else case');
  //     }
  //   };
  //   fetchTicket();
  // }, [params.ticketId]);

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
      <h1>TicketPage</h1>
      <p>{params.ticketId}</p>

      <NavigationBar />

      {/* <div className="ticket-desc">
        <h3>Note</h3>
        <textarea ref={NoteTextArea} name="" id="" cols="40" rows="6" placeholder={ticket.note}></textarea>
      </div> */}
    </>
  );
}

export default withPage(TicketPage, { uiMetadata });
