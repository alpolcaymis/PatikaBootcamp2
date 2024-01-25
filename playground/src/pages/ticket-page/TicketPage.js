import React, { useEffect, useRef, useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Spinner from '../../components/Spinner/Spinner';
import {
  withPage,
  PageHeader,
  ActionBar,
  InformationText,
  Card,
  InformationGrid,
  Grid,
  Divider,
  Select,
  BasePage,
  GetIcon,
  Button,
} from 'component/ui';
import { scopeKeys } from 'component/base';
import { useHistory } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/data-context';

const textareaStyle = {
  boxSizing: 'border-box',
  WebkitBoxSizing: 'border-box',
  MozBoxSizing: 'border-box',
  width: '100%',
  fontSize: '16px',
  color: '#333',
  padding: '10px',
};

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
      <>
        <Grid>
          <Card
            scopeKey={scopeKeys.View_Loan}
            showHeader={true}
            title={`Ticket ID : #${foundTicket.id}`}
            xs={3}
            md={3}
            lg={3}
          >
            <InformationText subtitle={foundTicket.name} title="Name:" />
            <Divider light orientation="horizontal" variant="middle" />
            <InformationText subtitle={foundTicket.date} title="Date:" />
            <InformationText subtitle={foundTicket.requestType} title="Request Type:" />
            <InformationText
              subtitle={
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
              }
              title="Status:"
            />
          </Card>

          <Card scopeKey={scopeKeys.View_Loan} xs={5} md={5} lg={5}>
            <Card scopeKey="Public" variant="outlined">
              <InformationText subtitle={foundTicket.requestMessage} title="Request Message:" />
            </Card>
          </Card>
          <Card scopeKey={scopeKeys.View_Loan} showHeader={true} title="Reply the request" xs={5}>
            <InformationText
              subtitle={
                <textarea
                  style={textareaStyle}
                  ref={textAreaRef}
                  name=""
                  id={`note-${urlTicketId}`}
                  cols="40"
                  rows="6"
                  value={foundTicket.note}
                  onChange={(e) => handleInputChange(urlTicketId, 'note', e.target.value)}
                  // onBlur={(e) => handleInputChange(urlTicketId, 'note', e.target.value)}
                ></textarea>
              }
              title="Answer Message:"
            />
            <Button
              component="label"
              variant="contained"
              startIcon={<GetIcon icon={'pushPin'} />}
              sx={{ marginRight: '1rem', color: 'white', backgroundColor: 'red' }}
              onClick={() => closeTicket()}
            >
              Save & Close Ticket
            </Button>
          </Card>
        </Grid>
      </>
    </BasePage>
  );
}

export default withPage(TicketPage, { uiMetadata });
