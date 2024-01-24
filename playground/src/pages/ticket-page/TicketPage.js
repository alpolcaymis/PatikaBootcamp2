import React, { useEffect, useRef, useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Spinner from '../../components/Spinner/Spinner';
import { withPage, PageHeader, ActionBar, Card, InformationGrid, Grid, Select, BasePage } from 'component/ui';
import { useHistory } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/data-context';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u6u6u6u6u6u',
};
function TicketPage({ data }) {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const params = useParams();

  const urlTicketId = Number(params.ticketId);
  // const dataTicketId = Number(data.id);

  const { handleTicketStatusChange, handleInputChange, findInTickets, foundTicket } = useDataContext();

  const textAreaRef = useRef();

  const closeTicket = () => {
    handleInputChange(urlTicketId, 'status', 'closed');
    history.push('/playground/tickets');
  };

  findInTickets(urlTicketId);

  if (loading) {
    return <Spinner />;
  }

  return (
    <BasePage title="TicketPage">
      <NavigationBar />
      {foundTicket && (
        <>
          <h3>Name: {foundTicket.name}</h3>
          <h3>Request Type : {foundTicket.requestType}</h3>
          <h3>Request Message : {foundTicket.requestMessage}</h3>
          <h3>Status : {foundTicket.status}</h3>
          <select
            id={`status-${urlTicketId}`}
            onChange={(e) => handleTicketStatusChange(Number(urlTicketId), e.target.value)}
            value={foundTicket.status}
            required
          >
            <option value="new">new</option>
            <option value="open">open</option>
            <option value="closed">closed</option>
            <option value="on-hold">on hold </option>
          </select>

          <div className="foundTicket-desc">
            <h3>Note</h3>
            <textarea
              ref={textAreaRef}
              name=""
              id={`note-${urlTicketId}`}
              cols="40"
              rows="6"
              value={foundTicket.note}
              onChange={(e) => handleInputChange(urlTicketId, 'note', e.target.value)}
              // onBlur={(e) => handleInputChange(urlTicketId, 'note', e.target.value)}
            ></textarea>
          </div>

          <button onClick={() => closeTicket()}>Save & Close Ticket</button>
        </>
      )}
    </BasePage>
  );
}

export default withPage(TicketPage, { uiMetadata });
