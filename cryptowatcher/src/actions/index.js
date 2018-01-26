let nextCoinId = 0
export const addCoin = (name) => ({
  type: 'ADD_COIN',
  id: nextCoinId++,
  name
})