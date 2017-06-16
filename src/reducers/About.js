
const initialState = {}


export default function about(state = initialState, action) {
  switch (action.type) {
    case 'ABOUT':
      return { ...state, data: action.payload };

    default:
      return state;
  }
}
