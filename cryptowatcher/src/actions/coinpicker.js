
export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';
export const MAYBE_UPDATE_SUGGESTIONS = 'MAYBE_UPDATE_SUGGESTIONS';
export const LOAD_SUGGESTIONS_BEGIN = 'LOAD_SUGGESTIONS_BEGIN';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export const loadSuggestions=(allcoins,value)=> {
    return (dispatch) => {

      dispatch(loadSuggestionsBegin());
      if(!allcoins)
        dispatch(maybeUpdateSuggestions([], value));
      else{
        const escapedValue = escapeRegexCharacters(value.trim());
      const regex = new RegExp('^' + escapedValue, 'i');
      var matching= escapedValue === ''?[]:allcoins.filter(c => regex.test(c.name));
      dispatch(maybeUpdateSuggestions(matching, value));
      }
      
  }
};

export const updateInputValue=(value)=> {
  return {
    type: UPDATE_INPUT_VALUE,
    value
  };
};

export const clearSuggestions=()=> {
  return {
    type: CLEAR_SUGGESTIONS
  };
};

export const loadSuggestionsBegin=()=> {
  return {
    type: LOAD_SUGGESTIONS_BEGIN
  };
};

export const maybeUpdateSuggestions=(suggestions, value)=> {
  return {
    type: MAYBE_UPDATE_SUGGESTIONS,
    suggestions,
    value
  };
};
