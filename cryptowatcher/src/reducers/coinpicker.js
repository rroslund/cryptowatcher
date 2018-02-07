
import {
    UPDATE_INPUT_VALUE,
    CLEAR_SUGGESTIONS,
    LOAD_SUGGESTIONS_BEGIN,
    MAYBE_UPDATE_SUGGESTIONS
 } from '../actions'
  
  const coinpicker = (state = {
    value: '',
    suggestions: [],
    isLoading: false
  }, action = {})=> {
    switch (action.type) {
      case UPDATE_INPUT_VALUE:
        return {
          ...state,
          value: action.value
        };
  
      case CLEAR_SUGGESTIONS:
        return {
          ...state,
          suggestions: []
        };
  
      case LOAD_SUGGESTIONS_BEGIN:
        return {
          ...state,
          isLoading: true
        };
  
      case MAYBE_UPDATE_SUGGESTIONS:
        // Ignore suggestions if input value changed
        if (action.value !== state.value) {
          return {
            ...state,
            isLoading: false
          };
        }
  
        return {
          ...state,
          suggestions: action.suggestions,
          isLoading: false
        };
  
      default:
        return state;
    }
  }

  export default coinpicker