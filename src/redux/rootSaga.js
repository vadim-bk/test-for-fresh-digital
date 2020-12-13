import { fork, all } from 'redux-saga/effects'

import { orderWatchers } from '../components/Order/actions';


const sagas = [
  orderWatchers,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}