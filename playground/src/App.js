import React from 'react';
import { AppProvider } from 'component/base';

import moduleInfo from './moduleInfo';
import routes from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const className = moduleInfo.name;
import { DataContextProvider } from './context/data-context';

export default (params) => {
  return (
    <>
      <DataContextProvider>
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
