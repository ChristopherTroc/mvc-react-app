import {
  loaderUpdate,
  startSession,
  closeSession,
  updateHeaders,
  resetHeaders,
} from '../actions/globalActions';

const globals = {
  baseUrl: `https://your-api.${process.env.REACT_APP_ENV}.example.com/`,
  loader: false,
  session: {},
  headers: { headers: { 'Content-Type': 'application/json' } },
};

function reducer(state = globals, { type, payload }) {
  switch (type) {
    case loaderUpdate: {
      return Object.assign({}, state, { loader: payload });
    }
    //SESSSION
    case startSession: {
      return Object.assign({}, state, { session: payload });
    }
    case closeSession: {
      return Object.assign({}, state, { session: false });
    }
    case updateHeaders: {
      return Object.assign({}, state, {
        headers: { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${payload}` } },
      });
    }
    case resetHeaders: {
      return Object.assign({}, state, { headers: { headers: { 'Content-Type': 'application/json' } } });
    }
    default: {
      return state;
    }
  }
}
export default reducer;
