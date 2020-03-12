// The reducer specifies the application state changes in response to certain actions to the store (context).
export default (state, action) => {
  switch(action.type) {

    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload
      }

    case 'DELETE_TRANSACTION':
      return {
        // Return the current state.
        ...state,
        // Return the new array of transactions (all of them except for the one with an ID matching the removed transaction).
        transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
      }

    case 'ADD_TRANSACTION':
      return {
        ...state,
        // Return the new array of transactions by adding the payload onto the existing transactions in the state.
        transactions: [...state.transactions, action.payload]
      }

    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}
