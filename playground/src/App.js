import React from 'react';
import { AppProvider } from 'component/base';

import moduleInfo from './moduleInfo';
import routes from './routes';
import { Breadcrumbs, Typography } from 'component/ui';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const className = moduleInfo.name;
import { DataContextProvider } from './context/data-context';

export default (params) => {
  return (
    <>
      <DataContextProvider>
        <Breadcrumbs
          menuList={[
            <Typography key="3" color="text.primary">
              Parent
            </Typography>,
            <Typography key="3" color="text.primary">
              Child
            </Typography>,
            <Typography key="3" color="text.primary">
              Item
            </Typography>,
          ]}
        />
        <AppProvider
          {...{
            ...params,
            routes,
            className,
          }}
        />
      </DataContextProvider>
      {/* <ToastContainer /> */}
    </>
  );
};
