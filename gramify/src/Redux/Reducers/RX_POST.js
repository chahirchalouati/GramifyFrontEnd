import { COMMENT_TYPES, LIKE_TYPES, POST_TYPES } from "../Types";

const initialState = {
  posts: [],
  create_post_start: false,
  create_post_success: false,
  create_post_failed: false,

  get_post_start: false,
  get_post_success: false,
  get_post_failed: false,

  delete_post_start: false,
  delete_post_success: false,
  delete_post_failed: false,

  update_post_start: false,
  update_post_success: false,
  update_post_failed: false,

  create_comment_start: false,
  create_comment_success: false,
  create_comment_failed: false,

  errorMessage: {},
};

const RX_POST = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_TYPES.CREATE_POST_START:
      return {
        ...state,
        create_post_start: true,
        create_post_success: false,
        create_post_failed: false,
      };
    case POST_TYPES.CREATE_POST_SUCCESS:
      return {
        ...state,
        create_post_start: false,
        create_post_success: true,
        create_post_failed: false,
        posts: [payload, ...state.posts],
      };
    case POST_TYPES.CREATE_POST_FAILED:
      return {
        ...state,
        create_post_start: false,
        create_post_success: false,
        create_post_failed: true,
        errorMessage: payload,
      };
    case POST_TYPES.GET_POST_START:
      return {
        ...state,
        get_post_start: true,
        get_post_success: false,
        get_post_failed: false,
      };
    case POST_TYPES.GET_POST_SUCCESS:
      return {
        ...state,
        get_post_start: false,
        get_post_success: true,
        get_post_failed: false,
        posts: payload,
      };
    case POST_TYPES.GET_POST_FAILED:
      return {
        ...state,
        get_post_start: false,
        get_post_success: false,
        get_post_failed: true,
        errorMessage: payload,
      };

    case COMMENT_TYPES.CREATE_COMMENT_START:
      return {
        ...state,
        get_comment_start: true,
        get_comment_success: false,
        get_comment_failed: false,
        errorMessage: {}
      };
    case COMMENT_TYPES.CREATE_COMMENT_SUCCESS:

      state.posts.find(p => p.id === payload.id).comments.unshift(payload.data);
      return {
        ...state,



        create_comment_start: false,
        create_comment_success: true,
        create_comment_failed: false,

      };
    case COMMENT_TYPES.CREATE_COMMENT_FAILED:
      return {
        ...state,
        get_comment_start: false,
        get_comment_success: false,
        get_comment_failed: true,
        errorMessage: payload
      };


    case LIKE_TYPES.CREATE_LIKE_START:
      return {
        ...state,

      };
    case LIKE_TYPES.CREATE_LIKE_SUCCESS:
      var reaction = state.posts.find(p => p.id === payload.idPost).reactions.find(r => r.id === payload.id)
      if (reaction == null || undefined) {
        state.posts.find(p => p.id === payload.idPost).reactions.push(payload);
      } else {
        state.posts.find(p => p.id === payload.idPost).reactions.find(r => r.id === payload.id).isLiked = payload.isLiked;
      }
      return {
        ...state,

      };

    case LIKE_TYPES.CREATE_LIKE_FAILED:
      return {
        ...state,
        errorMessage: payload
      };










    default:
      return state;
  }
};
export default RX_POST;
