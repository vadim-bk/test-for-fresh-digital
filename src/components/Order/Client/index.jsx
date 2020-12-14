import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button } from '@material-ui/core';

import { getClientsList } from '../selectors';
import { debounce } from '../../../services/helpers';
import { getApplicantsSaga, getClientsSaga, getFilteredClientsSaga, setClientId } from '../actions';

const Client = ({ handleSubmit }) => {
  const [clientInfo, setClientInfo] = useState(null)

  const dispatch = useDispatch()
  const clients = useSelector(getClientsList)

  useEffect(() => {
    dispatch(getClientsSaga())
  }, [])

  const handleChangeInput = (e, value) => {
    if (e.type === 'click') {
      const selectedClient = clients.find(el => el.name === value)
      if (selectedClient) {
        setClientInfo(selectedClient)
        dispatch(setClientId(selectedClient.id))
        return dispatch(getApplicantsSaga(selectedClient.id))
      }
    }

    if (value.length >= 3) {
      dispatch(getFilteredClientsSaga(value.trim()))
    }
  }

  return (
    <section className="wrapper">
      <div className="container">

        <h1>Клієнт</h1>

        <Autocomplete
          id="combo-box-demo"
          className="field"
          options={clients}
          getOptionLabel={(option) => option.label}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Customer Search / Selection" />}
          onInputChange={debounce(handleChangeInput)}
        />

        {clientInfo && (
          <>
            <div className="client-info">
              <p><b>{clientInfo?.name}</b></p>
              <p>{clientInfo?.address?.address}</p>
              <p>Телефон: {clientInfo?.phone}</p>
            </div>

            <Button className='btn-long' variant="contained" color="primary" onClick={handleSubmit}>
              SUBMIT AN APPLICATION
            </Button>
          </>
        )}

      </div>
    </section>
  )
}

export default Client
