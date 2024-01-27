import React, { useState, useEffect } from 'react';
import { withPage, BasePage, Card } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { scopeKeys } from 'component/base';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u9u9u9u9u9u',
};

function SearchTicket() {
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
          <div>
            <h1>SearchTicket</h1>
            <div className="">
              <input ref={input} type="text" placeholder="enter your code ticket ID" required />
              <button
                className=""
                onClick={() =>
                  input.current.value !== '' ? history.push(`/playground/ticket-info/${input.current.value}`) : null
                }
              >
                Search
              </button>
            </div>
          </div>
        </Card>
      </BasePage>
    </>
  );
}

export default withPage(SearchTicket, { uiMetadata });
