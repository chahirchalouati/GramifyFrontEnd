import { AUTH_TYPES } from "../Types";

const initialState = {
  isLoading: false,
  hasSuccess: false,
  isFailed: false,
  error: {},
  payload: {},
};

const RX_SIGN_UP = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_TYPES.SIGN_UP_START:
      return {
        ...state,

        isLoading: true,
        hasSuccess: false,
        isFailed: false,
        error: {},
        payload: {},
      };
    case AUTH_TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,

        isLoading: false,
        hasSuccess: true,
        isFailed: false,
        error: {},
        payload: payload,
      };
    case AUTH_TYPES.SIGN_UP_FAILED:
      return {
        ...state,

        isLoading: false,
        hasSuccess: false,
        isFailed: true,
        error: payload,
        payload: {},
      };
    case AUTH_TYPES.SIGN_UP_RESET:
      return {
        isLoading: false,
        hasSuccess: false,
        isFailed: false,
        error: {},
        payload: {},
      };
    default:
      return state;
  }
};
export default RX_SIGN_UP