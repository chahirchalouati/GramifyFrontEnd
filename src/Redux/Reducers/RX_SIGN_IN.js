import { AUTH_TYPES, PROFILE_TYPES } from "../Types";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  hasSuccess: false,
  isFailed: false,
  error: {},
  payload: {},
  isLoggedOut: true,
  profile_isLoading: false,
  profile_hasSuccess: false,
  profile_isFailed: false,
  profile_error: {}
};

const RX_SIGN_IN = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_TYPES.SIGN_IN_START:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: true,
        hasSuccess: false,
        isFailed: false,
        error: {},
        payload: {},
        isLoggedOut: true,
      };
    case AUTH_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        hasSuccess: true,
        isFailed: false,
        error: {},
        payload: payload,
        isLoggedOut: false,
        profile_hasSuccess: payload.user.profile != null,

      };
    case AUTH_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        hasSuccess: false,
        isFailed: true,
        error: payload,
        payload: {},
        isLoggedOut: true,
      };
    case AUTH_TYPES.LOG_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        hasSuccess: false,
        isFailed: false,
        error: {},
        payload: {},
        isLoggedOut: true,
        profile_isLoading: false,
        profile_hasSuccess: false,
        profile_isFailed: false,
        profile_error: {}
      };

    case PROFILE_TYPES.COMPLETE_PROFILE_START:
      return {
        ...state,
        profile_isLoading: true,
        profile_hasSuccess: false,
        profile_isFailed: false,
      };
    case PROFILE_TYPES.COMPLETE_PROFILE_SUCCESS:
      return {
        ...state,
        profile_isLoading: false,
        profile_hasSuccess: true,
        profile_isFailed: false,
        payload: { ...payload, user: payload },
      };
    case PROFILE_TYPES.COMPLETE_PROFILE_FAILED:
      return {
        ...state,
        profile_isLoading: false,
        profile_hasSuccess: false,
        profile_isFailed: true,
        profile_error: payload
      };
    default:
      return state;
  }
};
export default RX_SIGN_IN;
