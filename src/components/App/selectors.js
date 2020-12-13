import { createSelector } from "reselect";

export const getApp = state => state.app;
export const getIsLoading = createSelector(getApp, app => app.isLoading)
