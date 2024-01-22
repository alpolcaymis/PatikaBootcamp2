import React from 'react';
import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u2u2u2u2u2u',
};
function Tickets() {
  return (
    <>
      <h1>Tickets</h1>
      <NavigationBar />
    </>
  );
}

export default withPage(Tickets, { uiMetadata });
