import React, { useEffect, useMemo, useState, useCallback } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';
import { withPage, DataGrid, Card, BasePage } from 'component/ui';
import { useTranslation, useFormManagerContext, scopeKeys } from 'component/base';

import TicketItem from '../../components/TicketItem/TicketItem';

import { useDataContext } from '../../context/data-context';

import TicketDefinition from '../ticket-definition/TicketDefinition';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u2u2u2u2u2u',
};

function Tickets() {
  const { translate } = useTranslation();
  const { tickets } = useDataContext();
  const { showDialog } = useFormManagerContext();

  const addClicked = useCallback(() => {
    showDialog({
      title: translate('Sample add'),
      content: <TicketDefinition />,
      callback: (data) => {
        if (data) {
          // getDataSource();
        }
      },
    });
  }, []);

  const editClicked = useCallback((id, data) => {
    data &&
      showDialog({
        title: translate('Sample edit'),
        content: <TicketDefinition data={data} />,
        callback: () => {
          // getDataSource();
        },
      });
  }, []);

  const deleteData = (id) => {
    console.log('deleteData', deleteData);

    // if (id) {
    //   executeDelete({ url: stringFormat(apiUrls.sampleApi, id) }).then((response) => {
    //     if (response.Success && response.Value) {
    //       getDataSource();
    //     }
    //   });
    // }
  };

  const deleteClicked = useCallback((id, data) => {
    // data && deleteData(data.Id);
    deleteData();
    console.log('deleteClicked', deleteClicked);
  }, []);

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

  const cardActionList = useMemo(
    () => [
      {
        name: 'Add',
        icon: 'add',
        onClick: addClicked,
        scopeKey: scopeKeys.Create_Loan,
      },
    ],
    [addClicked],
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
      <Card scopeKey={scopeKeys.View_Loan} showHeader={true} actionList={cardActionList}>
        <DataGrid
          dataSource={tickets}
          columns={columns}
          actionList={gridActionList}
          autoSizeAllColumns
          // idProperty="Id"
        />
      </Card>
    </BasePage>
  );
}

export default withPage(Tickets, { uiMetadata });
