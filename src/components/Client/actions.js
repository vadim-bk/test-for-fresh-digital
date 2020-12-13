import { call, put, takeEvery } from "redux-saga/effects";

import api from "../../services/api";
import types from "../../redux/types";
import { setIsLoading } from "../App/actions";

export const getClientsSaga = () => ({type: types.GET_CLIENTS_SAGA});
export const setClients = (payload) => ({type: types.SET_CLIENTS, payload});

export const getFilteredClientsSaga = (payload) => ({type: types.GET_FILTERED_CLIENTS_SAGA, payload});
export const setFilteredClients = (payload) => ({type: types.SET_FILTERED_CLIENTS, payload});

export const getApplicantsSaga = () => ({type: types.GET_APPLICANTS_SAGA});
export const setApplicants = (payload) => ({type: types.SET_APPLICANTS, payload});


function* sagaOnGetClients() {
  try {
    // yield put(setIsLoading(true))
    const {status, data} = yield call(api.getClients)
    if (status >= 200 && status < 300) {
      yield put(setClients(data))
    }
  } catch (error) {
    console.error(error)
  } finally {
    // yield put(setIsLoading(false))
  }
}

function* sagaOnGetFilteredClients({payload}) {
  try {
    const {status, data} = yield call(api.getFilteredClients, payload)
    if (status >= 200 && status < 300) {
      yield put(setFilteredClients(data))
    }
  } catch (error) {
    console.error(error)
  }
}


export function* clientWatchers() {
  yield takeEvery(types.GET_CLIENTS_SAGA, sagaOnGetClients);
  yield takeEvery(types.GET_FILTERED_CLIENTS_SAGA, sagaOnGetFilteredClients);
}