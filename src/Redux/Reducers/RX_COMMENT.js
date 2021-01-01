
import { COMMENT_TYPES } from "../Types";

const initialState = {
    comments: [],
    create_comment_start: false,
    create_comment_success: false,
    create_comment_failed: false,

    get_comment_start: false,
    get_comment_success: false,
    get_comment_failed: false,

    delete_comment_start: false,
    delete_comment_success: false,
    delete_comment_failed: false,

    update_comment_start: false,
    update_comment_success: false,
    update_comment_failed: false,
    errorMessage: {},
};

const RX_COMMENT = (state = initialState, { type, payload }) => {
    switch (type) {
        case COMMENT_TYPES.GET_COMMENT_START:
            return {
                ...state,
                create_comment_start: true,
                create_comment_success: false,
                create_comment_failed: false,
                comments: [],
                errorMessage: {}
            };
        case COMMENT_TYPES.GET_COMMENT_SUCCESS:
            return {
                ...state,
                create_comment_start: false,
                create_comment_success: true,
                create_comment_failed: false,
                comments: payload,
                errorMessage: {}
            };
        case COMMENT_TYPES.GET_COMMENT_FAILED:
            return {
                ...state,
                ...state,
                create_comment_start: false,
                create_comment_success: false,
                create_comment_failed: false,
                errorMessage: payload
            };



        case COMMENT_TYPES.UPDATE_COMMENT_START:
            return {
                ...state,
                ...payload
            };
        case COMMENT_TYPES.UPDATE_COMMENT_SUCCESS:
            return {
                ...state,
                ...payload
            };
        case COMMENT_TYPES.UPDATE_COMMENT_FAILED:
            return {
                ...state,
                ...payload
            };

        case COMMENT_TYPES.DELETE_COMMENT_START:
            return {
                ...state,
                ...payload
            };
        case COMMENT_TYPES.DELETE_COMMENT_SUCCESS:
            return {
                ...state,
                ...payload
            };
        case COMMENT_TYPES.DELETE_COMMENT_FAILED:
            return {
                ...state,
                ...payload
            };

        default:
            return state;
}
};
export default RX_COMMENT;
