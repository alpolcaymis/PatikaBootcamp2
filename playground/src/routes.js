import { lazy } from 'react';

import { NotFound } from 'component/ui';

const SampleDefinition = lazy(() => import('./pages/sample-definition'));
const SampleList = lazy(() => import('./pages/sample-list'));
const AdanaPage = lazy(() => import('./pages/adana-page/AdanaPage'));
const Tickets = lazy(() => import('./pages/tickets/Tickets'));
const NewTicket = lazy(() => import('./pages/new-ticket/NewTicket'));
const TicketDefinition = lazy(() => import('./pages/ticket-definition/TicketDefinition'));
const TicketList = lazy(() => import('./pages/ticket-list/TicketList'));
const TicketPage = lazy(() => import('./pages/ticket-page/TicketPage'));

export default [
  {
    name: 'SampleDefinition',
    module: '/playground',
    path: '/sample-definition',
    component: SampleDefinition,
    uiKey: 'u7e7c13a017',
  },
  {
    name: 'SampleList',
    module: '/playground',
    path: '/sample-list',
    component: SampleList,
    uiKey: 'u24bddfade6',
  },
  {
    name: 'TicketDefinition',
    module: '/playground',
    path: '/ticket-definition',
    component: TicketDefinition,
    uiKey: 'u4u4u4u4u4u',
  },
  {
    name: 'TicketList',
    module: '/playground',
    path: '/ticket-list',
    component: TicketList,
    uiKey: 'u5u5u5u5u5u',
  },
  {
    name: 'AdanaPage',
    module: '/playground',
    path: '/tickets/:id',
    component: AdanaPage,
    uiKey: 'u1u1u1u1u1u',
  },
  {
    name: 'AdanaPage',
    module: '/playground',
    path: '/adana-page',
    component: AdanaPage,
    uiKey: 'u1u1u1u1u1u',
  },
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
    name: 'NotFound',
    module: '/playground',
    path: '*',
    component: NotFound,
  },
];
