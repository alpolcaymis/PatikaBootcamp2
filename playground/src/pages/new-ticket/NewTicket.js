import React from 'react';
import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useHistory } from 'react-router-dom';
import { Button } from 'component/ui';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u3u3u3u3u3u',
};
function NewTicket() {
  const history = useHistory();

  const handleClick = () => {
    // Navigate to a different route programmatically
    history.push('/playground/tickets');
  };

  return (
    <>
      <h1>NewTicket</h1>
      <NavigationBar />
      <Button secondary variant="contained" xs={8} onClick={handleClick}>
        Go to Tickets
      </Button>
    </>
  );
}

export default withPage(NewTicket, { uiMetadata });
