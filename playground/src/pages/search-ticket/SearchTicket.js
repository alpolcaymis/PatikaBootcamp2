import React, { useState, useEffect } from 'react';
import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

import { Link } from 'component/ui';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u9u9u9u9u9u',
};

function SearchTicket() {
  return (
    <>
      <h1>SearchTicket</h1>
      <NavigationBar />
      {/* <Link hoverNoneUnderline uiKey={'u5u5u5u5u5u'}>
        TicketList-Link(component/ui)
      </Link> */}
    </>
  );
}

export default withPage(SearchTicket, { uiMetadata });
