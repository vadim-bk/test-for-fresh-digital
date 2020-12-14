import React from 'react'

import Order from '../Order';
import { setAuthToken } from '../../services/helpers';

const App = () => {
  setAuthToken()
  return (
    <>
    <Order />
    </>
  );
}

export default App;
