let nextCoinId = 0
export const addCoin = (name) => ({
  type: 'ADD_COIN',
  id: nextCoinId++,
  name
})

export * from './marketcap';
export * from './coins';
export * from './coinpicker';