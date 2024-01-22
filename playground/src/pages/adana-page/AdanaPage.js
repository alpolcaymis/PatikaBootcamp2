import React from 'react';
import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u1u1u1u1u1u',
};
function AdanaPage() {
  return (
    <>
      <h1>AdanaPage</h1>
      <NavigationBar />
    </>
  );
}

export default withPage(AdanaPage, { uiMetadata });
