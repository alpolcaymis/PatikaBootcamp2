import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavigationBar.module.css';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function NavigationBar() {
  //value index problem need to fix
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ padding: '1px 4px' }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="wrapped label tabs example">
          <Tab className={classes.li} label={<Link to="/playground/new-ticket">New Ticket</Link>} />
          <Tab className={classes.li} label={<Link to="/playground/search-ticket">Search Ticket</Link>} />
          <Tab className={classes.li} label={<Link to="/playground/tickets">Tickets</Link>} />
        </Tabs>
      </Box>
    </>
  );
}

export default NavigationBar;
