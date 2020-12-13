import React from 'react'
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import Client from '../Client';
import { getIsLoading } from './selectors';
import { setAuthToken } from '../../services/helpers';

const App = () => {
  setAuthToken()
  
  const isLoading = useSelector(getIsLoading)

  return (
    <>
    {/* {isLoading && <CircularProgress />} */}
    <Client />
    </>
  );
}

export default App;
