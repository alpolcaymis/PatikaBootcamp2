import React from 'react';
import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

import { Link } from 'component/ui';
import {
  useAuthenticationContext,
  useFiProxy,
  useFormManagerContext,
  useSnackbar,
  useTranslation,
  scopeKeys,
  stringFormat,
} from 'component/base';

import { DataContextProvider } from '../../context/data-context';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u1u1u1u1u1u',
};

function AdanaPage() {
  const { executeGet, executeDelete } = useFiProxy();

  const getData = () => {
    executeGet({ fullURL: `https://api.sampleapis.com/cartoons/cartoons2D`, enqueueSnackbarOnError: false }).then(
      (response) => {
        if (response) {
          // setDataSource(response);
          console.log(response);
        }
      },
    );
  };

  return (
    <>
      <h1>AdanaPage</h1>
      <NavigationBar />
      <Link hoverNoneUnderline uiKey={'u5u5u5u5u5u'}>
        TicketList-Link(component/ui)
      </Link>
      <button onClick={getData}>Click</button>
    </>
  );
}

export default withPage(AdanaPage, { uiMetadata });
