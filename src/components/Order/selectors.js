import { createSelector } from 'reselect';

export const getOrder = state => state.order;
export const getFilteredClients = createSelector(getOrder, app => app.filteredClients)
export const getApplicants = createSelector(getOrder, app => app.applicants)
export const getApplicantsIds = createSelector(getOrder, app => app.applicantsIds)


