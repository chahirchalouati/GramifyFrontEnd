import { STORY_TYPES } from "../Types";

const initialState = {
  stories: [],
  assets: [],
  get_story_start: false,
  get_story_success: false,
  get_story_failed: false,

  create_story_start: false,
  create_story_success: false,
  create_story_failed: false,

  update_story_start: false,
  update_story_success: false,
  update_story_failed: false,

  delete_story_start: false,
  delete_story_success: false,
  delete_story_failed: false,

  error_message: {},
};

const RX_STORY = (state = initialState, { type, payload }) => {
  switch (type) {
    case STORY_TYPES.CREATE_STORY_START:
      return {
        ...state,
        create_story_start: true,
        create_story_success: false,
        create_story_failed: false,
        error_message: {},
      };
    case STORY_TYPES.CREATE_STORY_SUCCESS:

      if (state.stories.content.length > 5) {
        state.stories.content.pop();
      }
      state.stories.content.unshift(payload);

      return {
        ...state,
        create_story_start: false,
        create_story_success: true,
        create_story_failed: false,
        error_message: {},

      };
    case STORY_TYPES.CREATE_STORY_FAILED:
      return {
        ...state,
        create_story_start: false,
        create_story_success: false,
        create_story_failed: true,
        error_message: payload,
      };

    case STORY_TYPES.GET_STORY_START:
      return {
        ...state,
        stories: [],
        get_story_start: true,
        get_story_success: false,
        get_story_failed: false,
        error_message: {},
        create_story_success: false,
      };
    case STORY_TYPES.GET_STORY_SUCCESS:
      return {
        ...state,
        stories: payload,
        get_story_start: false,
        get_story_success: true,
        get_story_failed: false,
        error_message: {},
      };
    case STORY_TYPES.GET_STORY_FAILED:
      return {
        ...state,
        stories: [],
        get_story_start: false,
        get_story_success: false,
        get_story_failed: true,
        error_message: payload,
      };

    case STORY_TYPES.GET_ASSETS_STORY_START:
      return {
        ...state,
        assets: [],
      };

    case STORY_TYPES.GET_ASSETS_STORY_SUCCESS:
      return {
        ...state,
        assets: payload,
      };

    case STORY_TYPES.GET_ASSETS_STORY_FAILED:
      return {
        ...state,
        assets: [...state.assets],
      };

    default:
      return state;
  }
};
export default RX_STORY;
