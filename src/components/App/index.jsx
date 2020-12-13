import React from 'react'
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import Client from '../Order/Client';
import { getIsLoading } from './selectors';
import { setAuthToken } from '../../services/helpers';
import Applicants from '../Order/Applicants';
import Order from '../Order';

const App = () => {
  setAuthToken()
  
  const isLoading = useSelector(getIsLoading)

  return (
    <>
    {/* {isLoading && <CircularProgress />} */}
    <Order />
    </>
  );
}

export default App;
