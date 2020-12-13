import { fork, all } from 'redux-saga/effects'
import { clientWatchers } from '../components/Client/actions';


const sagas = [
  clientWatchers,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}