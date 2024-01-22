import React, { useState } from 'react';
import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import TicketItem from '../../components/TicketItem/TicketItem';
const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u2u2u2u2u2u',
};

const initialTicketsArray = [
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

function Tickets() {
  const [ticketsArray, setTicketsArray] = useState(initialTicketsArray);
  return (
    <>
      <h1>Tickets</h1>
      <NavigationBar />
      {ticketsArray.map((item) => {
        return (
          <TicketItem
            key={item.id}
            id={item.id}
            date={item.date}
            name={item.name}
            status={item.status}
            note={item.note}
          />
        );
      })}
    </>
  );
}

export default withPage(Tickets, { uiMetadata });
