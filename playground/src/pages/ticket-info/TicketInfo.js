import React, { useEffect, useRef, useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Spinner from '../../components/Spinner/Spinner';
import { withPage, InformationText, Card, Grid, Divider, BasePage, Button, Typography } from 'component/ui';
import { scopeKeys } from 'component/base';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/data-context';
import { Link } from 'component/ui';

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

  const { readTicket, ticket } = useDataContext();

  const params = useParams();
  const numberizedUrlTicketId = Number(params.ticketId);

  useEffect(() => {
    setLoading(true);
    readTicket(params.ticketId);
    setLoading(false);
  }, [params.ticketId]);

  console.log('<TicketInfo> ticket: ', ticket);

  const textAreaRef = useRef();

  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <BasePage title="TicketInfo">
      <NavigationBar />

      {loading ? (
        <Spinner />
      ) : ticket ? (
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
                  <select id={`status-${numberizedUrlTicketId}`} value={ticket.status} disabled>
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
            <Card scopeKey={scopeKeys.View_Loan} showHeader={true} title="Answer Message" xs={5}>
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
                    disabled
                  ></textarea>
                }
                title="Answer Message:"
              />
            </Card>
          </Grid>
        </>
      ) : (
        <>
          <Button variant="outlined">
            <Link hoverNoneUnderline uiKey={'u9u9u9u9u9u'}>
              🔙 Back to Search Ticket
            </Link>
          </Button>
          <Typography align="center" variant="h2">
            😥 No tickets for searched Id: {params.ticketId}
          </Typography>
        </>
      )}
    </BasePage>
  );
}

export default withPage(TicketInfo, { uiMetadata });
