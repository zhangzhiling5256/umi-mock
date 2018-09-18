import * as userServices from '../services/users';

export default {

  namespace: 'index',

  state: {
    user: {}
  },

  reducers: {
    saveUser(state, payload) {
      // return state.filter(item => item.id !== id);
      return {
        ...state,
        user: payload.data,
      };
    },
  },

  effects: {
    *fetchUserById({ payload: { id } }, { call, put }) {
      const response = yield call(userServices.fetchUserById, { id });
      yield put({
        type: 'saveUser',
        payload: {
          data: response
        }
      });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({
            type: 'fetchUserById',
            payload: query,
          });
        }
      });
    },
  },

};