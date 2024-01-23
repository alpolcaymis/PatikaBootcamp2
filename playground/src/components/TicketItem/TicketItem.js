import React from 'react';
import classes from './TicketItem.module.css';
import { Link } from 'react-router-dom';
import { useDataContext } from '../../context/data-context';
function TicketItem({ id, date, name, status, note }) {
  const { handleDeleteTicket } = useDataContext();

  return (
    <li className={classes.ticketItem}>
      <div>{id}</div>
      <div>{date}</div>
      <div>{name}</div>
      <div>{status}</div>
      <div>{note}</div>
      <Link to={`/playground/tickets/${id}`}>View</Link>
      <button onClick={() => handleDeleteTicket(id)}>Delete</button>
    </li>
  );
}

export default TicketItem;
