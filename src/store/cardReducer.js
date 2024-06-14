

const defaultState = {
  date:[]
};
export const cardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREASE": {
      const objectAddedProduct= {
        id:action.paylaod._id,
        name:action.paylaod.name,
        price: action.paylaod.price
      }
      return {
        ...state,
        date: [...state.date, objectAddedProduct],};
    }
    default:
      return state
  }
};
