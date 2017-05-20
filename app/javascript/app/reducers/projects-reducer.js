const initialState = {
  all: null,
  projectSelected: null,
  searchText: null,
}
export default function(state=initialState, action) {
  switch (action.type) {
    case 'SET_PROJETCS':
      return {
        ...state,
        all: action.payload
      };
    case 'SET_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.payload
      }
    default:
      return state;
  }
}
