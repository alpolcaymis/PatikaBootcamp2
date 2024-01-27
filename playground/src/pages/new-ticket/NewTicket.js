import React, { useEffect, useRef, useState, useMemo } from 'react';

import { useTranslation, scopeKeys } from 'component/base';

import { BasePage, Card, Input, Select } from 'component/ui';

import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useHistory } from 'react-router-dom';
import { Button, Box, GetIcon } from 'component/ui';
import { useDataContext } from '../../context/data-context';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u3u3u3u3u3u',
};

function NewTicket() {
  const { handleAddTicket, createTicket } = useDataContext();

  const { translate } = useTranslation();

  const nameRef = useRef();
  const requestTypeRef = useRef();
  const requestMessageRef = useRef();

  const history = useHistory();

  const handleSubmit = () => {
    const formData = {
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

  const generateTimestamp = () => {
    const timestamp = new Date().getTime();
    var date = new Date(timestamp);

    // Extract the components of the date
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var formattedDateTime = day + '-' + month + '-' + year + ' ' + hours + ':' + minutes + ':' + seconds;

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
