import React from 'react'
import { Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addCoin } from '../actions'

import './AddCoin.css'

let AddCoin = ({ dispatch }) => {
  return (
    <div className="AddCoin">
      <form onSubmit={e => {
        e.preventDefault()
        const input = document.querySelector('input[name=coin]')
        if (!input.value.trim()) {
          return
        }
        dispatch(addCoin(input.value))
        input.value = ''
      }}>
        <Input className="CoinText" placeholder='Coin...' name='coin' />
        <Button className="CoinButton" basic type='submit'>
          New Coin
        </Button>
      </form>
    </div>
  )
}
AddCoin = connect()(AddCoin)

export default AddCoin