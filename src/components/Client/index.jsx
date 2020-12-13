import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { getApplicantsSaga, getClientsSaga, getFilteredClientsSaga } from './actions';
import { getClientsList } from './selectors';

const Client = () => {
  const [value, setValue] = useState('') // custom .trim()
  const [disabledOptions, setDisabledOptions] = useState(true)

  const dispatch = useDispatch()

  const clients = useSelector(getClientsList)
  const filteredClients = useSelector(getFilteredClientsSaga)

  const checkDisabled = disabledOptions ? [] : clients

  useEffect(() => {
    dispatch(getClientsSaga())
  }, [])

  // const getOptionLabel = (option) => {
  //   if (disabledOptions) {
  //     return option
  //   }
  //   return option.name
  // }
  

  const handleChangeInput = (e, value) => {
    if (value.length > 3) {
      dispatch(getFilteredClientsSaga(value))
    }
  }

  const handleSubmit = (e, value) => {
    dispatch(getApplicantsSaga(value))
  }


  return (
    <section>
      <h1>Клієнт</h1>

      <Autocomplete
        id="combo-box-demo"
        options={checkDisabled}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        onInputChange={handleChangeInput}
        onChange={handleSubmit}
      />
    </section>
  )
}

export default Client
