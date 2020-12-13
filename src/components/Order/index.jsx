import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Client from './Client'
import Applicants from './Applicants'
import { getOrder } from './selectors'
import { clearOrderState } from './actions'

const Order = () => {
  const [showResult, setShowResult] = useState('')

  const dispatch = useDispatch()
  const { clienId, applicantsIds, newApplicants } = useSelector(getOrder)

  const handleSubmit = () => {
    setShowResult(JSON.stringify({ clienId, applicantsIds, newApplicants }))
    dispatch(clearOrderState())
  }

  return (
    <div>
      <Client handleSubmit={handleSubmit} />
      <Applicants handleSubmit={handleSubmit} />

      {showResult}
    </div>
  )
}

export default Order
