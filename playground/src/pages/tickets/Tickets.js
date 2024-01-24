import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';
import { withPage, DataGrid, Card, BasePage } from 'component/ui';
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
    <BasePage title="Tickets">
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
    </BasePage>
  );
}

export default withPage(Tickets, { uiMetadata });
