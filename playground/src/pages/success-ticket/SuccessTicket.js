import React, { useState, useEffect } from 'react';
import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u8u8u8u8u8u',
};

function SuccessTicket() {
  return (
    <>
      <h1>SuccessTicket</h1>
      <NavigationBar />
    </>
  );
}

export default withPage(SuccessTicket, { uiMetadata });
