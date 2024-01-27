import React, { useEffect, useRef, useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Spinner from '../../components/Spinner/Spinner';
import { withPage, InformationText, Card, Grid, Divider, BasePage, GetIcon, Button } from 'component/ui';
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
  uiKey: 'u7u7u7u7u7u',
};
function TicketInfo({ data }) {
  console.log('<TicketInfo/>');
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const { handleInputChange, updateTicket, readTicket, ticket } = useDataContext();

  const params = useParams();
  const numberizedUrlTicketId = Number(params.ticketId);
  // const dataTicketId = Number(data.id);

  useEffect(() => {
    setLoading(true);
    readTicket(params.ticketId);
    setLoading(false);
  }, [params.ticketId]);

  console.log('<TicketInfo> ticket: ', ticket);

  const textAreaRef = useRef();

  const closeTicket = () => {
    handleInputChange(numberizedUrlTicketId, 'status', 'closed');
    updateTicket(params.ticketId, 'status', 'closed');
    history.push('/playground/tickets');
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <BasePage title="TicketInfo">
      <NavigationBar />

      {ticket && (
        <>
          <Grid>
            <Card
              scopeKey={scopeKeys.View_Loan}
              showHeader={true}
              title={`Ticket ID : #${params.ticketId}`}
              xs={3}
              md={3}
              lg={3}
            >
              <InformationText subtitle={ticket.name} title="Name:" />
              <Divider light orientation="horizontal" variant="middle" />
              <InformationText subtitle={ticket.date} title="Date:" />
              <InformationText subtitle={ticket.requestType} title="Request Type:" />
              <InformationText
                subtitle={
                  <select
                    id={`status-${numberizedUrlTicketId}`}
                    // onChange={(e) => handleTicketStatusChange(Number(numberizedUrlTicketId), e.target.value)}
                    // onChange={(e) => {
                    //   updateTicket(params.ticketId, 'status', e.target.value);
                    // }}
                    onChange={(e) => {
                      handleInputChange(params.ticketId, 'status', e.target.value);
                      updateTicket(params.ticketId, 'status', e.target.value);
                    }}
                    value={ticket.status}
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
                <InformationText subtitle={ticket.requestMessage} title="Request Message:" />
              </Card>
            </Card>
            <Card scopeKey={scopeKeys.View_Loan} showHeader={true} title="Reply the request" xs={5}>
              <InformationText
                subtitle={
                  <textarea
                    style={textareaStyle}
                    ref={textAreaRef}
                    name=""
                    id={`note-${numberizedUrlTicketId}`}
                    cols="40"
                    rows="6"
                    placeholder={ticket.note}
                    value={ticket.note}
                    onChange={(e) => handleInputChange(numberizedUrlTicketId, 'note', e.target.value)}
                    onBlur={() => updateTicket(params.ticketId, 'note', textAreaRef.current.value)}
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
      )}
    </BasePage>
  );
}

export default withPage(TicketInfo, { uiMetadata });
