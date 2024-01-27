import React, { useEffect, useMemo, useState, useCallback } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { withPage, DataGrid, Card, BasePage } from 'component/ui';
import { useTranslation, useFormManagerContext, scopeKeys } from 'component/base';
import { useHistory } from 'react-router-dom';

import { useDataContext } from '../../context/data-context';
import Spinner from '../../components/Spinner/Spinner';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u2u2u2u2u2u',
};

function Tickets() {
  console.log('<Tickets/> ');
  const { tickets, deleteTicket, readTickets } = useDataContext();
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    readTickets();
    setLoading(false);
  }, []);

  const editClicked = (id, data) => {
    data && history.push(`/playground/ticket-page/${data.id}`);
    console.log(data.id);
  };

  const deleteClicked = (id, data) => {
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
      { name: 'note', header: 'Answer', defaultFlex: 1, minWidth: 50 },
    ];
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <BasePage title="Tickets">
      <NavigationBar />

      <Card scopeKey={scopeKeys.View_Loan} showHeader={true}>
        <DataGrid
          dataSource={tickets}
          columns={columns}
          actionList={gridActionList}
          autoSizeAllColumns
          idProperty="id"
        />
      </Card>
    </BasePage>
  );
}

export default withPage(Tickets, { uiMetadata });
