import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavigationBar.module.css';

function NavigationBar() {
  return (
    <nav>
      <ul className={classes.ul}>
        <li>
          <Link to="/playground/adana-page">AdanaPage</Link>
        </li>
        {/* <li>
          <Link to="/playground/sample-definition">Sample Definition</Link>
        </li>
        <li>
          <Link to="/playground/sample-list">SampleList</Link>
        </li> */}
        <li>
          <Link to="/playground/tickets">Tickets</Link>
        </li>
        <li>
          <Link to="/playground/new-ticket">New Ticket</Link>
        </li>
        <li>
          <Link to="/playground/ticket-definition">Ticket Definition</Link>
        </li>
        <li>
          <Link to="/playground/ticket-list">Ticket List</Link>
        </li>
        <li>
          <Link to="/playground/ticket-page/sadas">Ticket Page</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
