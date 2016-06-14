const SEND = 'protoblocks/contact/SEND';
const SEND_SUCCESS = 'protoblocks/contact/SEND_SUCCESS';
const SEND_FAIL = 'protoblocks/contact/SEND_FAIL';

const initialState = {
  sendError: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEND:
      return state;
    case SEND_SUCCESS:
      return {
        ...state,
        sendError: null,
      };
    case SEND_FAIL:
      return {
        ...state,
        sendError: action.error
      };
    default:
      return state;
  }
}

export function send(data) {
  return {
    types: [SEND, SEND_SUCCESS, SEND_FAIL],
    promise: (client) => client.post('/contact/send', {
      data
    })
  };
}
