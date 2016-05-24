const LOAD = 'protoblocks/products/LOAD';
const LOAD_SUCCESS = 'protoblocks/products/LOAD_SUCCESS';
const LOAD_FAIL = 'protoblocks/products/LOAD_FAIL';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        byId: action.result.reduce((o, p) => { o[p.id] = p; return o; }, {}),
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        byId: null,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.products && globalState.products.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/products/load')
  };
}
