import React, { useEffect, useMemo, useState, useCallback } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';
import { withPage, DataGrid, Card, BasePage } from 'component/ui';
import { useTranslation, useFormManagerContext, scopeKeys } from 'component/base';
import { useHistory } from 'react-router-dom';

import TicketItem from '../../components/TicketItem/TicketItem';

import { useDataContext } from '../../context/data-context';

import TicketDefinition from '../ticket-definition/TicketDefinition';
import TicketPage from '../ticket-page/TicketPage';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u2u2u2u2u2u',
};

function Tickets() {
  console.log('<Tickets> run');
  const { translate } = useTranslation();
  const { tickets, handleDeleteTicket, deleteTicket } = useDataContext();
  const { showDialog } = useFormManagerContext();
  const history = useHistory();

  const editClicked = (id, data) => {
    data && history.push(`/playground/ticket-page/${data.id}`);
    console.log(data.id);
  };

  const deleteClicked = (id, data) => {
    data && handleDeleteTicket(data.id);
    data && deleteTicket(data.id);
    console.log(data.id);
  };

  const gridActionList = useMemo(
    () => [
      {
        name: 'delete',
        onClick: deleteClicked,
        scopeKey: scopeKeys.Create_Loan,
      },
      {
        name: 'edit',
        onClick: editClicked,
        scopeKey: scopeKeys.Create_Loan,
      },
    ],
    [deleteClicked, editClicked],
  );

  const columns = useMemo(() => {
    return [
      { name: 'id', header: 'id', defaultFlex: 1, minWidth: 50, visible: false },
      { name: 'requestType', header: 'Request Type', defaultFlex: 1, minWidth: 50, defaultFlex: 1, minWidth: 50 },
      { name: 'requestMessage', header: 'Request Message', defaultFlex: 1, minWidth: 50 },
      { name: 'name', header: 'Name', defaultFlex: 1, minWidth: 50 },
      { name: 'status', header: 'Status', defaultFlex: 1, minWidth: 50 },
      { name: 'date', header: 'Date', defaultFlex: 1, minWidth: 50 },
      { name: 'note', header: 'note', defaultFlex: 1, minWidth: 50 },
    ];
  }, []);

  return (
    <BasePage title="Tickets">
      <NavigationBar />

      <Card scopeKey={scopeKeys.View_Loan} showHeader={true}>
        <DataGrid
          dataSource={tickets}
          columns={columns}
          actionList={gridActionList}
          autoSizeAllColumns
          idProperty="Id"
        />
      </Card>
    </BasePage>
  );
}

export default withPage(Tickets, { uiMetadata });
