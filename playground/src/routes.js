import { lazy } from 'react';

import { NotFound } from 'component/ui';

const Tickets = lazy(() => import('./pages/tickets/Tickets'));
const NewTicket = lazy(() => import('./pages/new-ticket/NewTicket'));
const TicketPage = lazy(() => import('./pages/ticket-page/TicketPage'));
const TicketInfo = lazy(() => import('./pages/ticket-info/TicketInfo'));
const SuccessTicket = lazy(() => import('./pages/success-ticket/SuccessTicket'));
const SearchTicket = lazy(() => import('./pages/search-ticket/SearchTicket'));

export default [
  {
    name: 'Tickets',
    module: '/playground',
    path: '/tickets',
    component: Tickets,
    uiKey: 'u2u2u2u2u2u',
  },
  {
    name: 'NewTicket',
    module: '/playground',
    path: '/new-ticket',
    component: NewTicket,
    uiKey: 'u3u3u3u3u3u',
  },
  {
    name: 'TicketPage',
    module: '/playground',
    path: '/ticket-page/:ticketId',
    component: TicketPage,
    uiKey: 'u6u6u6u6u6u',
  },
  {
    name: 'TicketInfo',
    module: '/playground',
    path: '/ticket-info/:ticketId',
    component: TicketInfo,
    uiKey: 'u7u7u7u7u7u',
  },
  {
    name: 'SuccessTicket',
    module: '/playground',
    path: '/success-ticket',
    component: SuccessTicket,
    uiKey: 'u8u8u8u8u8u',
  },
  {
    name: 'SearchTicket',
    module: '/playground',
    path: '/search-ticket',
    component: SearchTicket,
    uiKey: 'u9u9u9u9u9u',
  },

  {
    name: 'NotFound',
    module: '/playground',
    path: '*',
    component: NotFound,
  },
];
