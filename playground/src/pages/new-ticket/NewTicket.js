import React, { useEffect, useRef, useState, useMemo } from 'react';

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

import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useHistory } from 'react-router-dom';
import { Button, Box, GetIcon } from 'component/ui';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u3u3u3u3u3u',
};

function NewTicket() {
  const [dataModel, setDataModel] = useState({});

  const history = useHistory();

  const handleClick = () => {
    // Navigate to a different route programmatically
    history.push('/playground/tickets');
  };

  // const handleAddDrink = () => {
  //   setDrinks([
  //     ...drinks,
  //     {
  //       id: generateCustomId(),
  //       type: "beer",
  //       amount: "",
  //       volume: "",
  //       percentage: "",
  //     },
  //   ]);
  // };

  return (
    <>
      <h1>NewTicket</h1>
      <NavigationBar />
      <Box>
        <Button
          component="label"
          variant="outlined"
          startIcon={<GetIcon icon={'import'} />}
          sx={{ marginRight: '1rem' }}
        >
          {'Icon upload'}
          <input
            type="file"
            name="fileIcon"
            hidden
            //onChange={handleUpload.bind(this, 'Icon')}
            accept="image/png"
          />
        </Button>
      </Box>
      <Button secondary variant="contained" xs={8} onClick={handleClick}>
        Go to Tickets
      </Button>
    </>
  );
}

export default withPage(NewTicket, { uiMetadata });
