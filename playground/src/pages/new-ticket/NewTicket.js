import React, { useEffect, useRef, useState, useMemo } from 'react';

import { useTranslation, scopeKeys } from 'component/base';

import { BasePage, Card, Checkbox, Input, Select, SelectEnum, DatePicker, withFormPage } from 'component/ui';

import { withPage, PageHeader } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useHistory } from 'react-router-dom';
import { Button, Box, GetIcon } from 'component/ui';
import { useDataContext } from '../../context/data-context';

import { db } from '../../firebase-config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u3u3u3u3u3u',
};

function NewTicket() {
  const { tickets, setTickets, handleAddTicket, createTicket } = useDataContext();

  const { translate } = useTranslation();
  const [dataModel, setDataModel] = useState({});

  const nameRef = useRef();
  const requestTypeRef = useRef();
  const requestMessageRef = useRef();
  const isActiveRef = useRef(false);

  const history = useHistory();

  const ticketsCollectionRef = collection(db, 'tickets');

  const handleSubmit = () => {
    const formData = {
      // id: generateCustomId(),
      date: generateTimestamp(),
      name: nameRef.current.value,
      requestType: requestTypeRef.current.value,
      requestMessage: requestMessageRef.current.value,
      status: 'new',
      note: 'not answered',
    };
    createTicket(formData);
    handleAddTicket(formData);
    history.push('/playground/tickets');
  };

  const handleClick = () => {
    // Navigate to a different route programmatically
    history.push('/playground/tickets');
  };

  const generateCustomId = () => {
    const random = Math.floor(Math.random() * 1000000);
    return random;
  };
  const generateTimestamp = () => {
    const timestamp = new Date().getTime();
    // Create a new Date object with the timestamp
    var date = new Date(timestamp);

    // Extract the components of the date
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // Format the components as a string
    var formattedDateTime = day + '-' + month + '-' + year + ' ' + hours + ':' + minutes + ':' + seconds;

    // Log or use the formatted date and time
    console.log(formattedDateTime);
    return formattedDateTime;
  };
  const onActionClick = (action) => {
    if (action.commandName === 'Save') {
      handleSubmit();
      console.log('save');
    } else if (action.commandName == 'Cancel') {
      console.log('Cancel');
    }
  };

  return (
    <BasePage
      title="New Ticket"
      onActionClick={onActionClick}
      actionList={[{ name: 'Cancel' }, { name: 'Save', scopeKey: scopeKeys.Create_Loan }]}
      actionPosition="bottom"
    >
      <NavigationBar />
      <Card scopeKey={scopeKeys.Create_Loan}>
        <Input xs={6} required ref={nameRef} label={translate('Name')} />
        <Select
          datasource={[
            {
              label: 'Connectivity problem',
              value: 'Connectivity problem',
            },
            {
              label: 'Email issues',
              value: 'Email issues',
            },
            {
              label: 'User and Access Management',
              value: 'User and Access Management',
            },
            {
              label: 'Network issues',
              value: 'Network issues',
            },
            {
              label: 'Security concerns',
              value: 'Security concerns',
            },

            {
              label: 'Hardware requests',
              value: 'Hardware requests',
            },
          ]}
          label="Request Type"
          name="Select"
          onChange={function noRefCheck() {}}
          value
          ref={requestTypeRef}
          xs={6}
        />
        <Input xs={12} required ref={requestMessageRef} rows={3} multiline label="Request Message" />

        <Box>
          <Button
            component="label"
            variant="outlined"
            startIcon={<GetIcon icon={'import'} />}
            sx={{ marginRight: '1rem' }}
          >
            {'Icon upload'}
            <input
              type="file"
              name="fileIcon"
              hidden
              //onChange={handleUpload.bind(this, 'Icon')}
              accept="image/png"
            />
          </Button>
        </Box>
        <Button
          component="label"
          variant="contained"
          startIcon={<GetIcon icon={'send'} />}
          sx={{ marginRight: '1rem' }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Card>
    </BasePage>
  );
}

export default withPage(NewTicket, { uiMetadata });
