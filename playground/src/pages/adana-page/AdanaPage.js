import React from 'react';
import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

import {
  Accordion,
  ActionBar,
  Alert,
  AppBar,
  AuthorizedUsers,
  AgreementViewer,
  Backdrop,
  Badge,
  Box,
  Breadcrumbs,
  BusinessDatePicker,
  Button,
  IconButton,
  CircularProgress,
  Card,
  DataGrid,
  Filter,
  Input,
  BasePage,
  Link,
  Grid,
  Tooltip,
  Select,
  Typography,
  PageHeader,
} from 'component/ui';
import { DataContextProvider } from '../../context/data-context';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u1u1u1u1u1u',
};
function AdanaPage() {
  return (
    <>
      <h1>AdanaPage</h1>
      <Link hoverNoneUnderline uiKey={'u5u5u5u5u5u'}>
        TicketList-Link(component/ui)
      </Link>
      <NavigationBar />

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
      <CircularProgress color="inherit" size={40} thickness={3.6} />

      <Box>
        <Tooltip title="Button">
          <Button variant="contained" xs={8}>
            Button
          </Button>
        </Tooltip>
      </Box>
      <Grid>
        <Select
          datasource={[
            {
              label: 'John McQueen',
              value: 'John McQueen',
            },
            {
              label: 'Mary Stones',
              value: 'Mary Stones',
            },
            {
              label: 'Robert Fil',
              value: 'Robert Fil',
            },
            {
              label: 'Roger Robson',
              value: 'Roger Robson',
            },
          ]}
          label="Select Component"
          name="Select"
          onChange={function noRefCheck() {}}
          value
          xs={6}
        />
      </Grid>

      <Alert message="Fimple" />
      <AppBar toggleDrawer={function noRefCheck() {}} />

      <Backdrop />
      <PageHeader
        actions={[
          {
            groupName: '',
            name: 'Save',
          },
          {
            groupName: '',
            name: 'Edit',
          },
        ]}
        onActionClick={function noRefCheck() {}}
        title="Sample Title"
      />
    </>
  );
}

export default withPage(AdanaPage, { uiMetadata });
