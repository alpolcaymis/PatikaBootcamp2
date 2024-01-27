import React, { useState, useEffect } from 'react';
import { withPage } from 'component/ui';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useDataContext } from '../../context/data-context';
import copyIcon from '../../assets/svg/copy.svg';

const uiMetadata = {
  moduleName: 'playground',
  uiKey: 'u8u8u8u8u8u',
};

function SuccessTicket() {
  const { lastCreatedTicketId } = useDataContext();
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  return (
    <>
      <NavigationBar />
      <div className="heading">
        <h1>Thank you</h1>
        <h3>We recieved your application!</h3>
        <div>
          <p className=""> Here is your CODE : </p>
          <div className="">
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
            <span
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
            </span>
          </div>
        </div>

        {shareLinkCopied && <p className="">Link Copied!</p>}
      </div>
    </>
  );
}

export default withPage(SuccessTicket, { uiMetadata });
