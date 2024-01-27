import React, { useState, useEffect } from 'react';
import { withPage, BasePage, Alert, Card, InputGenerator, Typography, Grid, CircularProgress, Box } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useDataContext } from '../../context/data-context';
import copyIcon from '../../assets/svg/copy.svg';
import { scopeKeys } from 'component/base';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u8u8u8u8u8u',
};

function SuccessTicket() {
  console.log('<SuccessTicket/> ');
  const { lastCreatedTicketId } = useDataContext();
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  return (
    <>
      <BasePage title="SuccessTicket">
        <NavigationBar />
        <Card scopeKey={scopeKeys.View_Loan}>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Typography align="center" variant="h2">
              Thanks for informing us
            </Typography>
            <br />

            <Typography align="center" variant="h3">
              We recieved your request!
            </Typography>
            <br />

            <Typography align="center" variant="h6" margin="normal">
              Here is your tracking code :
            </Typography>
            <br />

            <Typography align="center" variant="h4">
              {!lastCreatedTicketId ? (
                <CircularProgress color="inherit" size={40} thickness={3.6} />
              ) : (
                <code
                  className=""
                  onClick={() => {
                    navigator.clipboard.writeText(lastCreatedTicketId);
                    setShareLinkCopied(true);
                    setTimeout(() => {
                      setShareLinkCopied(false);
                    }, 2000);
                  }}
                >
                  {lastCreatedTicketId}
                </code>
              )}
            </Typography>
            <Typography align="center" variant="h2" xs={4}>
              <InputGenerator
                disabledGenerateIcon={true}
                label="Code"
                readOnly={true}
                codeLength={20}
                value={lastCreatedTicketId}
                onClick={() => navigator.clipboard.writeText(lastCreatedTicketId)}
              />
            </Typography>
          </Grid>
          {shareLinkCopied && <Alert message="Tracking Id Copied!" severity="success" />}
        </Card>
      </BasePage>
    </>
  );
}

export default withPage(SuccessTicket, { uiMetadata });
