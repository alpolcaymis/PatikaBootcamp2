import React, { useState, useEffect } from 'react';
import { withPage, BasePage, Alert, Card, InputGenerator, Typography, Grid, Box } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useDataContext } from '../../context/data-context';
import copyIcon from '../../assets/svg/copy.svg';
import { scopeKeys } from 'component/base';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u8u8u8u8u8u',
};

function SuccessTicket() {
  const { lastCreatedTicketId } = useDataContext();
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  return (
    <>
      <BasePage title="SuccessTicket">
        <NavigationBar />
        <Card scopeKey={scopeKeys.View_Loan}>
          <Grid>
            <Typography align="center" variant="h2">
              Thanks for informing us
            </Typography>
            <Typography align="center" variant="h3">
              We recieved your request!
            </Typography>
            <Typography align="center" variant="h4" margin="normal">
              Here is your tracking code :
            </Typography>
            <Typography align="center" variant="h5">
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
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <InputGenerator
                disabledGenerateIcon={{}}
                generateStartCharacter={lastCreatedTicketId}
                label="Code"
                readOnly={{}}
                xs={9}
              />
            </Box>
            <Typography align="center" variant="h6">
              {/* <span
                className=""
                onClick={() => {
                  navigator.clipboard.writeText(lastCreatedTicketId);
                  setShareLinkCopied(true);
                  setTimeout(() => {
                    setShareLinkCopied(false);
                  }, 2000);
                }}
              >
                <img src={copyIcon} alt="" />
              </span> */}
            </Typography>
          </Grid>
          {shareLinkCopied && <Alert message="Fimple" severity="success" />}
        </Card>
      </BasePage>
    </>
  );
}

export default withPage(SuccessTicket, { uiMetadata });
