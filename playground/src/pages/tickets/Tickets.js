import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';
import { withPage, DataGrid, Card } from 'component/ui';
import { scopeKeys } from 'component/base';

import TicketItem from '../../components/TicketItem/TicketItem';

import { useDataContext } from '../../context/data-context';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u2u2u2u2u2u',
};

function Tickets() {
  const { tickets } = useDataContext();

  return (
    <>
      <h1>Tickets</h1>
      <NavigationBar />
      {tickets.map((item) => {
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

// const initialDataSource = [
//   {
//     id: 111,
//     date: '21/01/2024',
//     name: 'Ahmet',
//     status: 'new',
//     note: 'default message',
//     button: `${(<Link to={'/tickets'}>View</Link>)}`,
//   },
//   {
//     id: 222,
//     date: '21/01/2024',
//     name: 'Cansu',
//     status: 'close',
//     note: 'default message',
//     button: `${(<Link to={'/tickets'}>View</Link>)}`,
//   },
//   {
//     id: 333,
//     date: '21/01/2024',
//     name: 'Sibel',
//     status: 'closed',
//     note: 'default message',
//     button: `${(<Link to={'/tickets'}>View</Link>)}`,
//   },
// ];

// const [dataSource, setDataSource] = useState(initialDataSource);

// <Card scopeKey={scopeKeys.View_Loan}>
// <DataGrid
//   columns={[
//     {
//       defaultFlex: 1,
//       header: 'Id',
//       minWidth: 10,
//       name: 'id',
//     },
//     {
//       defaultFlex: 1,
//       header: 'Date',
//       minWidth: 10,
//       name: 'date',
//     },
//     {
//       defaultFlex: 1,
//       header: 'Name',
//       minWidth: 10,
//       name: 'name',
//     },
//     {
//       defaultFlex: 1,
//       header: 'status',
//       minWidth: 10,
//       name: 'status',
//     },
//     {
//       defaultFlex: 1,
//       header: 'button',
//       minWidth: 10,
//       name: 'button',
//     },
//   ]}
//   dataSource={dataSource}
// />

// </Card>
