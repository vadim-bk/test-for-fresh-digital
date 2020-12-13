import { createSelector } from 'reselect';

export const getClient = state => state.client;
export const getClientsList = createSelector(getClient, app => app.clients)
export const getFilteredClients = createSelector(getClient, app => app.filteredClients)
