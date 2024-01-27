import React, { useEffect, useRef, useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Spinner from '../../components/Spinner/Spinner';
import { withPage, InformationText, Card, Grid, Divider, BasePage, Box, GetIcon, Button } from 'component/ui';
import { Link } from 'component/ui';

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
  console.log('<TicketPage/>');
  const { handleInputChange, updateTicket, readTicket, ticket } = useDataContext();
  const [loading, setLoading] = useState(true);
  console.log('<TicketPage/> ticket => ', ticket);

  const history = useHistory();

  const params = useParams();
  const numberizedUrlTicketId = Number(params.ticketId);
  // const dataTicketId = Number(data.id);

  useEffect(() => {
    setLoading(true);
    readTicket(params.ticketId);
    setLoading(false);
  }, [params.ticketId]);

  const textAreaRef = useRef();

  const closeTicket = () => {
    handleInputChange(numberizedUrlTicketId, 'status', 'closed');
    updateTicket(params.ticketId, 'status', 'closed');
    history.push('/playground/tickets');
  };

  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <BasePage title="TicketPage">
      <NavigationBar />

      <Button variant="outlined">
        <Link hoverNoneUnderline uiKey={'u2u2u2u2u2u'}>
          Back to Tickets
        </Link>
      </Button>

      {ticket ? (
        <>
          <Card scopeKey="Public">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                  <Card
                    scopeKey="Public"
                    variant="outlined"
                    showHeader={true}
                    title={`Ticket ID : #${params.ticketId}`}
                  >
                    <InformationText subtitle={ticket.name} title="Name:" />
                    <Divider light orientation="horizontal" variant="middle" />
                    <InformationText subtitle={ticket.date} title="Date:" />
                    <InformationText subtitle={ticket.requestType} title="Request Type:" />
                    <InformationText
                      subtitle={
                        <select
                          id={`status-${numberizedUrlTicketId}`}
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
                </Grid>
                <Grid item xs={6} md={8}>
                  <Card scopeKey="Public" variant="outlined">
                    <InformationText subtitle={ticket.requestMessage} title="Request Message:" />
                  </Card>
                </Grid>

                <Grid item xs={6} md={4}>
                  <br />
                </Grid>
                <Grid item xs={6} md={8}>
                  <Card scopeKey={scopeKeys.View_Loan} showHeader={true} title="Reply the request" variant="outlined">
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
              </Grid>
            </Box>
          </Card>
        </>
      ) : (
        <Spinner />
      )}
    </BasePage>
  );
}

export default withPage(TicketPage, { uiMetadata });
