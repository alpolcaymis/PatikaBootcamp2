import React, { useState, useEffect } from 'react';
import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'component/ui';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u9u9u9u9u9u',
};

function SearchTicket() {
  const input = useRef();
  const history = useHistory();

  return (
    <>
      <NavigationBar />
      {/* <Link hoverNoneUnderline uiKey={'u8u8u8u8u8u'}>
        Back to Success
      </Link> */}
      <div>
        <h1>SearchTicket</h1>
        <div className="">
          <input ref={input} type="text" placeholder="enter your code ticket ID" required />
          <button
            className=""
            onClick={() => {
              input.current.value !== '' ? history.push(`/playground/ticket-info/${input.current.value}`) : null;
              // toast.error('please enter given ticket ID code');
            }}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default withPage(SearchTicket, { uiMetadata });
