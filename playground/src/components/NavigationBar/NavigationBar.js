import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ActionBar, Grid } from 'component/ui';
import classes from './NavigationBar.module.css';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function NavigationBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', padding: '1px' }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="wrapped label tabs example">
          <Tab className={classes.li} label={<Link to="/playground/new-ticket">New Ticket</Link>} />
          <Tab className={classes.li} label={<Link to="/playground/tickets">Tickets</Link>} />
          <Tab className={classes.li} label={<Link to="/playground/ticket-definition">Ticket Definition</Link>} />
          <Tab className={classes.li} label={<Link to="/playground/ticket-list">Ticket List</Link>} />
          <Tab className={classes.li} label={<Link to="/playground/ticket-page/123">Ticket Page</Link>} />
        </Tabs>
      </Box>
    </>
  );
}

export default NavigationBar;
