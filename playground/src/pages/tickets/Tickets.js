import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import TicketItem from '../../components/TicketItem/TicketItem';
import { Link } from 'react-router-dom';

import { withPage, DataGrid, Card } from 'component/ui';

import { scopeKeys } from 'component/base';
import { useDataContext } from '../../context/data-context';

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
const initialDataSource = [
  {
    id: 111,
    date: '21/01/2024',
    name: 'Ahmet',
    status: 'new',
    note: 'default message',
    button: `${(<Link to={'/tickets'}>View</Link>)}`,
  },
  {
    id: 222,
    date: '21/01/2024',
    name: 'Cansu',
    status: 'close',
    note: 'default message',
    button: `${(<Link to={'/tickets'}>View</Link>)}`,
  },
  {
    id: 333,
    date: '21/01/2024',
    name: 'Sibel',
    status: 'closed',
    note: 'default message',
    button: `${(<Link to={'/tickets'}>View</Link>)}`,
  },
];

function Tickets() {
  const { isLoggedIn } = useCartContext();

  const [ticketsArray, setTicketsArray] = useState(initialTicketsArray);

  const [dataSource, setDataSource] = useState(initialDataSource);

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
      <Card scopeKey={scopeKeys.View_Loan}>
        <DataGrid
          columns={[
            {
              defaultFlex: 1,
              header: 'Id',
              minWidth: 10,
              name: 'id',
            },
            {
              defaultFlex: 1,
              header: 'Date',
              minWidth: 10,
              name: 'date',
            },
            {
              defaultFlex: 1,
              header: 'Name',
              minWidth: 10,
              name: 'name',
            },
            {
              defaultFlex: 1,
              header: 'status',
              minWidth: 10,
              name: 'status',
            },
            {
              defaultFlex: 1,
              header: 'button',
              minWidth: 10,
              name: 'button',
            },
          ]}
          dataSource={dataSource}
        />
      </Card>
    </>
  );
}

export default withPage(Tickets, { uiMetadata });
