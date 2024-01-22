import React from 'react';
import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u3u3u3u3u3u',
};
function NewTicket() {
  return (
    <>
      <h1>NewTicket</h1>
      <NavigationBar />
    </>
  );
}

export default withPage(NewTicket, { uiMetadata });
