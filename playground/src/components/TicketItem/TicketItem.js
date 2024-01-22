import React from 'react';
import classes from './TicketItem.module.css';
import { Link } from 'react-router-dom';

function TicketItem({ id, date, name, status, note }) {
  return (
    <li className={classes.ticketItem}>
      <div>{id}</div>
      <div>{date}</div>
      <div>{name}</div>
      <div>{status}</div>
      <div>{note}</div>
      <Link to={`/playground/tickets/${id}`}>View</Link>
    </li>
  );
}

export default TicketItem;
