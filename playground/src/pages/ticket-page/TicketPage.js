import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { withPage } from 'component/ui';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u6u6u6u6u6u',
};

function TicketPage() {
  return (
    <>
      <h1>TicketPage</h1>
      <NavigationBar />
    </>
  );
}

export default withPage(TicketPage, { uiMetadata });
