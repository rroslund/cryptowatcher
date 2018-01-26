const coin = (state, action) => {
    switch (action.type) {
      case 'ADD_COIN':
        return {
          id: action.id,
          name: action.name
        }
      default:
        return state
    }
  }
  
  const coins = (state = [], action) => {
    switch (action.type) {
      case 'ADD_COIN':
        return [
          ...state,
          coin(undefined, action)
        ]
      default:
        return state
    }
  }
  
  export default coins