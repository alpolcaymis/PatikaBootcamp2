import React, { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { scopeKeys } from 'component/base';
import { withPage, BasePage, Alert, Card, Typography, Input, Grid, Button, IconButton } from 'component/ui';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u9u9u9u9u9u',
};

function SearchTicket() {
  console.log('<SuccessTicket />');
  const input = useRef();
  const history = useHistory();

  const handleNavigate = () => {
    input.current.value !== '' ? history.push(`/playground/ticket-info/${input.current.value}`) : null;
    // toast.error('please enter given ticket ID code');
  };

  return (
    <>
      <BasePage title="Search Ticket">
        <NavigationBar />
        <Card scopeKey={scopeKeys.View_Loan} showHeader={true}>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Typography align="center" variant="h2">
              SearchTicket
            </Typography>

            {/* <input ref={input} type="text" placeholder="enter your code ticket ID" required /> */}
            <Typography align="center" variant="h2" xs={4}>
              <Input ref={input} placeholder="enter your code ticket ID" label="Input" xs={3} />
              <Button
                onClick={() =>
                  input.current.value !== '' ? history.push(`/playground/ticket-info/${input.current.value}`) : null
                }
              >
                Search <IconButton color="info" icon="search" size="medium" />
              </Button>
            </Typography>
          </Grid>
        </Card>
      </BasePage>
    </>
  );
}

export default withPage(SearchTicket, { uiMetadata });
