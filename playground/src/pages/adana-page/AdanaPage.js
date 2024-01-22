import React from 'react';
import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

import {
  useAuthenticationContext,
  useFiProxy,
  useSnackbar,
  useTranslation,
  useTransactionContext,
  scopeKeys,
  stringFormat,
} from 'component/base';

import { BasePage, Card, Checkbox, Input, Select, SelectEnum, DatePicker, withFormPage } from 'component/ui';
import { DataContextProvider } from '../../context/data-context';

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
