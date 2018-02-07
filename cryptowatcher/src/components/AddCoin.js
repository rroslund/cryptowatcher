import React from 'react'
import { Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateInputValue,loadSuggestions,clearSuggestions } from '../actions'
import Autosuggest from 'react-autosuggest';

import './AddCoin.css'

class AddCoin extends React.Component {
  getSuggestionValue=(suggestion) =>{
    return suggestion.name;
  }
  
  renderSuggestion =(suggestion)=>{
    return (
      <span>{suggestion.name}</span>
    );
  }
  render(){
    const {coins, value, suggestions, isLoading, onChange, onSuggestionsFetchRequested, onSuggestionsClearRequested } = this.props;
    const status = (isLoading ? 'Loading...' : 'Type to load suggestions');
    const inputProps = {
      placeholder: "Pick your crypto",
      value,
      onChange
    };
    return (
      <div className="AddCoin">
        <div className="status">
          <strong>Status:</strong> {status}
        </div>
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={(v) => onSuggestionsFetchRequested(coins,v)}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps} />
      </div>
    );
  }
  
}








const mapStateToProps = (state) => {
  const { value, suggestions} = state.coinpicker;
  const coins = state.coins.all;
  let isLoading = state.coinpicker.isLoading || state.coins.isFetching;
  return {
    value,
    suggestions,
    isLoading,
    coins:coins.all
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onChange(event, { newValue }) {
      dispatch(updateInputValue(newValue));
    },
    onSuggestionsFetchRequested(coins, value) {
      dispatch(loadSuggestions(coins,value));
    },
    onSuggestionsClearRequested() {
      dispatch(clearSuggestions());
    }
  };
}

export default AddCoin = connect(mapStateToProps,mapDispatchToProps)(AddCoin)