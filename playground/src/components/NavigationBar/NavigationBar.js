import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavigationBar.module.css';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom';

function NavigationBar() {
  // value index problem need to fix
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log('navbar index newValue : ', newValue);
    console.log('navbar index oldValue : ', value);
  };
  const history = useHistory();

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  // Use useMemo to memoize the component
  const memoizedNavigationBar = useMemo(
    () => (
      <div>
        <Box sx={{ padding: '1px 4px' }}>
          <Tabs value={value} variant="fullWidth" aria-label="wrapped label tabs example" onChange={handleChange}>
            <Tab
              className={classes.li}
              onClick={() => {
                history.push('/playground/search-ticket');
              }}
              label="Search Ticket"
              {...a11yProps(0)}
            />
            <Tab
              className={classes.li}
              onClick={() => {
                history.push('/playground/new-ticket');
              }}
              label="Create Ticket"
              {...a11yProps(1)}
            />
            <Tab
              className={classes.li}
              onClick={() => {
                history.push('/playground/tickets');
              }}
              label="Tickets"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
      </div>
    ),
    [],
  ); // Empty dependency array means it won't recompute unless dependencies change

  return memoizedNavigationBar;
}

export default NavigationBar;
