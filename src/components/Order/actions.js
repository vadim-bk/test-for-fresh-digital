import { call, put, takeEvery } from "redux-saga/effects";

import api from "../../services/api";
import types from "../../redux/types";

export const getFilteredClientsSaga = (payload) => ({type: types.GET_FILTERED_CLIENTS_SAGA, payload});
export const setFilteredClients = (payload) => ({type: types.SET_FILTERED_CLIENTS, payload});

export const getApplicantsSaga = (payload) => ({type: types.GET_APPLICANTS_SAGA, payload});
export const setApplicants = (payload) => ({type: types.SET_APPLICANTS, payload});

export const setClientId = (payload) => ({type: types.SET_CLIENT_ID, payload});
export const setApplicantsIds = (payload) => ({type: types.SET_APPLICANTS_IDS, payload});
export const setNewApplicants = (payload) => ({type: types.SET_NEW_APPLICANTS, payload});

export const clearOrderState = () => ({type: types.CLEAR_ORDER_STATE});

function* sagaOnGetFilteredClients({payload}) {
  try {
    const {status, data} = yield call(api.getFilteredClients, payload)
    if (status >= 200 && status < 300) {
      if (data?.error) return
      yield put(setFilteredClients(data.items))
    }
  } catch (error) {
    console.error(error)
  }
}

function* sagaOnGetApplicants({payload}) {
  try {
    const {status, data} = yield call(api.getApplicants, payload)
    if (status >= 200 && status < 300) {
      yield put(setApplicants(data.items))
    }
  } catch (error) {
    console.error(error)
  }
}

export function* orderWatchers() {
  yield takeEvery(types.GET_FILTERED_CLIENTS_SAGA, sagaOnGetFilteredClients);
  yield takeEvery(types.GET_APPLICANTS_SAGA, sagaOnGetApplicants);
}