import { createSelector } from 'reselect';

export const getOrder = state => state.order;
export const getClientsList = createSelector(getOrder, app => app.clients)
export const getApplicants = createSelector(getOrder, app => app.applicants)
export const getApplicantsIds = createSelector(getOrder, app => app.applicantsIds)


