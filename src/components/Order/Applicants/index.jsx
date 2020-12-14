import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';

import db from '../../../db';
import { getApplicants, getApplicantsIds } from '../selectors';
import { setApplicants, setApplicantsIds, setNewApplicants } from '../actions';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';

const Applicants = ({ handleSubmit }) => {
  const initialState = {
    id: new Date(Date.now()),
    type: 'individual',
    innCode: '',
    name: '',
    address: {
      address: '',
      country: 'Ukraine',
    },
    originalName: '',
    originalAddress: ''
  };

  const [fields, setFields] = useState(initialState);
  const [showCreateBlock, setShowCreateBlock] = useState(false);

  const dispatch = useDispatch()

  const applicants = useSelector(getApplicants);
  const applicantsIds = useSelector(getApplicantsIds);

  const handleSelectApplicant = (id) => {
    const include = applicantsIds.includes(id)
    if (include) {
      const filteredIds = applicantsIds.filter(applicantId => applicantId !== id)
      dispatch(setApplicantsIds(filteredIds))
    } else {
      dispatch(setApplicantsIds([...applicantsIds, id]))
    }
  }

  const handleToggleAdd = () => setShowCreateBlock(!showCreateBlock);

  const handleChangeRadio = ({ target }) => {
    setFields((prev) => ({ ...prev, type: target.value }));
  };

  const handleChangeCountry = (e, value) => {
    setFields((prev) => ({ ...prev, address: { ...prev.address, country: value } }));
  };

  const handleChangeInput = ({ target: { name, value } }) => {
    const trimedValue = value.trim()
    if (name.startsWith(' ')) {
      const newName = name.trim()
      return setFields(prev => ({ ...prev, address: { ...prev.address, [newName]: trimedValue } }))
    }
    setFields(prev => ({ ...prev, [name]: trimedValue }))
  }

  const handleCreateApplicant = () => {
    dispatch(setApplicants([...applicants, fields]))
    dispatch(setNewApplicants(fields))
    handleToggleAdd()
    setFields(initialState)
  }

  const handleRemoveApplicant = (id) => {
    const filteredApplicants = applicants.filter(applicant => applicant.id !== id)
    dispatch(setApplicants(filteredApplicants))
  }


  return (
    <section className="wrapper">
      <div className="container">
        <h1>Заявники</h1>

        <div className="column">
          <div className="checkbox-group">
            {applicants?.map((applicant) => (
              <div className="field" key={applicant.id}>
                <FormControlLabel
                  key={applicant.id}
                  onChange={() => handleSelectApplicant(applicant.id)}
                  control={<Checkbox color="primary" />}
                  labelPlacement="end"
                  label={
                    <p>
                      <b>{applicant?.name}</b> {applicant?.address?.address}
                    </p>
                  }
                />
                <span className="remove-icon" onClick={() => handleRemoveApplicant(applicant.id)}>&#10006;</span>
              </div>
            ))}
          </div>

          <Button
            className="btn-short"
            variant="outlined"
            color="primary"
            onClick={handleToggleAdd}
          >
            Додати +
          </Button>

          {showCreateBlock && (
            <div className="create-applicant">
              <FormControl component="fieldset">
                <FormLabel component="legend">Додати заявника</FormLabel>

                <RadioGroup
                  className="radio-group"
                  row
                  aria-label="position"
                  name="position"
                  value={fields.type}
                >
                  <div className="field">
                    <FormControlLabel
                      value="individual"
                      onChange={handleChangeRadio}
                      control={<Radio color="primary" />}
                      label="Фізична особа"
                      labelPlacement="end"
                    />
                  </div>
                  <div className="field">
                    <FormControlLabel
                      value="legal"
                      onChange={handleChangeRadio}
                      control={<Radio color="primary" />}
                      label="Юридична особа"
                      labelPlacement="end"
                    />
                  </div>
                </RadioGroup>
              </FormControl>

              <Autocomplete
                className="input"
                options={db}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Країна" />}
                value={fields.address.country}
                onChange={handleChangeCountry}
              />

              <div className="col">
                <div className="field">
                  <TextField
                    className="input"
                    label="USREOU"
                    name='innCode'
                    value={fields.innCode}
                    onChange={handleChangeInput}
                  />
                </div>
              </div>

              <div className="double-input">
                <div className="col left">
                  <div className="field">
                    <TextField
                      className="input"
                      label="Назва"
                      name='name'
                      value={fields.name}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="field">
                    <TextField
                      className="input"
                      label="Адреса"
                      name=' address'
                      value={fields.address.address}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="col right">
                  {fields.address.country !== initialState.address.country && (
                    <>
                      <div className="field">
                        <TextField
                          className="input"
                          label="Назва мовою походження"
                          name='originalName'
                          value={fields.originalName}
                          onChange={handleChangeInput
                          } />
                      </div>
                      <div className="field">
                        <TextField
                          className="input"
                          label="Адреса мовою походження"
                          name='originalAddress'
                          value={fields.originalAddress}
                          onChange={handleChangeInput}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              <Button className="btn-short" variant="outlined" color="primary" onClick={handleCreateApplicant}>
                Додати
              </Button>
            </div>
          )}
        </div>

        <Button className="btn-long" variant="contained" color="primary" onClick={handleSubmit}>
          SUBMIT AN APPLICATION
        </Button>
      </div>
    </section >
  );
};

export default Applicants;
