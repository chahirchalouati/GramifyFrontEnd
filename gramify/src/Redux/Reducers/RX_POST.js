import { COMMENT_TYPES, LIKE_TYPES, POST_TYPES } from "../Types";

const initialState = {
  posts: [],
  nextPage: 0,
  isLast: false,
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


  get_new_post_start: false,
  get_new_post_success: false,
  get_new_post_failed: false,

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
        posts: payload.content,
        isLast: payload.last,
        nextPage: !payload.last ? state.nextPage + 1 : false,
      };
    case POST_TYPES.GET_POST_FAILED:
      return {
        ...state,
        get_post_start: false,
        get_post_success: false,
        get_post_failed: true,
        errorMessage: payload,
      };

    case POST_TYPES.GET_NEW_POST_START:
      return {
        ...state,
        get_new_post_start: true,
        get_new_post_success: false,
        get_new_post_failed: false,

      };
    case POST_TYPES.GET_NEW_POST_SUCCESS:

      console.log(state.nextPage);
      return {
        ...state,
        get_new_post_start: false,
        get_new_post_success: true,
        get_new_post_failed: false,
        posts: [...state.posts, ...payload.content],
        isLast: payload.last,
        nextPage: !payload.last ? state.nextPage + 1 : false,
      };
    case POST_TYPES.GET_NEW_POST_FAILED:
      return {
        ...state,
        get_new_post_start: false,
        get_new_post_success: false,
        get_new_post_failed: true,
        errorMessage: payload,
      };
    case COMMENT_TYPES.CREATE_COMMENT_START:
      return {
        ...state,
        get_comment_start: true,
        get_comment_success: false,
        get_comment_failed: false,
        errorMessage: {},
      };
    case COMMENT_TYPES.CREATE_COMMENT_SUCCESS:
      state.posts.find((p) => p.id === payload.id).comments.unshift(payload.data);
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
        errorMessage: payload,
      };

    case LIKE_TYPES.CREATE_LIKE_START:
      return {
        ...state,
      };
    case LIKE_TYPES.CREATE_LIKE_SUCCESS:

      const post = state.posts.find(p => p.id === payload.idPost);
      if (post.reactions.length <= 0) {
        state.posts.find(p => p.id === payload.idPost).reactions.push(payload);
      }
      if (post.reactions.length > 0) {
        const index = state.posts.find(p => p.id === payload.idPost).reactions.findIndex(r => r.id === payload.id);
        state.posts.find(p => p.id === payload.idPost).reactions.splice(index, 1);
        state.posts.find(p => p.id === payload.idPost).reactions.push(payload);
      }
      return {
        ...state,
      };

    case LIKE_TYPES.CREATE_LIKE_FAILED:
      return {
        ...state,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default RX_POST;
