import client from "../Api";
import {
    ACCESS_TYPES,
    AUTH_TYPES,
    COMMENT_TYPES,
    POST_TYPES,
    PROFILE_TYPES,
    STORY_TYPES,
    LIKE_TYPES,
} from "../Redux/Types";
import { tokenStore } from "./TokenService";

// authentifications request
export const authentifications = {
    // register new user
    singUp: (payload) => {
        return async (dispatch) => {
            dispatch({ type: AUTH_TYPES.SIGN_UP_START });
            try {
                const { data } = await client.post("/signup", payload);
                dispatch({ type: AUTH_TYPES.SIGN_UP_SUCCESS, payload: data });
            } catch (e) {
                dispatch({ type: AUTH_TYPES.SIGN_UP_FAILED, payload: e.response });
            }
        };
    },

    // register new user
    signIn: (payload) => {
        return async (dispatch) => {
            dispatch({ type: AUTH_TYPES.SIGN_IN_START });
            try {
                const { data } = await client.post("/signin", payload);
                dispatch({ type: AUTH_TYPES.SIGN_IN_SUCCESS, payload: data });
                tokenStore.storeToken(data.token);
            } catch (e) {
                dispatch({ type: AUTH_TYPES.SIGN_IN_FAILED, payload: e.response });
                console.log(e.response);
            }
        };
    },

    logOut: () => {
        return async (dispatch) => {
            tokenStore.removeToken("token");
            dispatch({ type: AUTH_TYPES.LOG_OUT_SUCCESS });
        };
    },
};

// profiles request
export const profiles = {
    completeProfile: (payload) => {
        return async (dispatch) => {
            dispatch({ type: PROFILE_TYPES.COMPLETE_PROFILE_START });
            try {
                const config = { headers: { "Content-Type": "multipart/form-data" } };
                const { data } = await client.post("/profiles", payload, config);
                dispatch({
                    type: PROFILE_TYPES.COMPLETE_PROFILE_SUCCESS,
                    payload: data,
                });
            } catch (e) {
                console.log(e);
                dispatch({
                    type: PROFILE_TYPES.COMPLETE_PROFILE_FAILED,
                    payload: e.response,
                });
            }
        };
    },
    get: (id) => { },
    post: (payload) => { },
    delete: (id) => { },
    update: (payload, id) => { },
    getOne: (id) => { },
    getAll: () => { },
};

// post request
export const posts = {
    get: (id) => { },
    post: (payload) => {
        return async (dispatch) => {
            dispatch({ type: POST_TYPES.CREATE_POST_START });
            try {
                const config = { headers: { "Content-Type": "multipart/form-data" } };
                const { data } = await client.post("/posts", payload, config);
                dispatch({ type: POST_TYPES.CREATE_POST_SUCCESS, payload: data });
            } catch (e) {
                console.log(e);
                dispatch({ type: POST_TYPES.CREATE_POST_FAILED, payload: e.response });
            }
        };
    },
    delete: (id) => { },
    update: (payload, id) => { },
    getOne: (id) => { },
    getAll: (nextPage) => {
        return async (dispatch) => {
            dispatch({ type: POST_TYPES.GET_POST_START });
            try {
                const { data } = await client.get("/posts?nextPage=" + nextPage);
                dispatch({ type: POST_TYPES.GET_POST_SUCCESS, payload: data });
            } catch (e) {
                dispatch({ type: POST_TYPES.GET_POST_FAILED, payload: e.response });
            }
        };
    },
    getNewPost: (nextPage) => {
        return async (dispatch) => {
            dispatch({ type: POST_TYPES.GET_NEW_POST_START });
            try {
                if (nextPage !== false) {
                    const { data } = await client.get("/posts?nextPage=" + nextPage);
                    dispatch({ type: POST_TYPES.GET_NEW_POST_SUCCESS, payload: data });
                } else {
                    return
                }

            } catch (e) {
                dispatch({ type: POST_TYPES.GET_NEW_POST_FAILED, payload: e.response });
            }
        };
    },
};

// comments request
export const comments = {
    get: (id) => {
        return async (dispatch) => {
            dispatch({ type: COMMENT_TYPES.GET_COMMENT_START });
            try {
                const { data } = await client.get("/comments/" + id);
                dispatch({ type: COMMENT_TYPES.GET_COMMENT_SUCCESS, payload: data });
            } catch (e) {
                console.log(e);
                dispatch({
                    type: COMMENT_TYPES.GET_COMMENT_FAILED,
                    payload: e.response,
                });
            }
        };
    },
    post: (payload) => {
        return async (dispatch) => {
            dispatch({ type: COMMENT_TYPES.CREATE_COMMENT_START });
            try {
                const { data } = await client.post("/comments", payload);

                dispatch({
                    type: COMMENT_TYPES.CREATE_COMMENT_SUCCESS,
                    payload: { data: data, id: payload.id },
                });
            } catch (e) {
                dispatch({
                    type: COMMENT_TYPES.CREATE_COMMENT_FAILED,
                    payload: e.response,
                });
            }
        };
    },
    delete: (id) => { },
    update: (payload, id) => { },
    getOne: (id) => { },
    getAll: () => { },
};

// users request
export const users = {
    get: (id) => { },
    post: (payload) => { },
    delete: (id) => { },
    update: (payload, id) => { },
    getOne: (id) => { },
    getAll: () => { },
};

// stories request
export const stories = {
    get: (id) => { },
    post: (payload) => {
        return async (dispatch) => {
            dispatch({ type: STORY_TYPES.CREATE_STORY_START });
            try {
                const config = { headers: { "Content-Type": "multipart/form-data" } };
                const { data } = await client.post("/stories", payload, config);

                dispatch({
                    type: STORY_TYPES.CREATE_STORY_SUCCESS,
                    payload: data,
                });
            } catch (e) {
                dispatch({
                    type: STORY_TYPES.CREATE_STORY_FAILED,
                    payload: e.response,
                });
                console.warn(e.response);
            }
        };
    },
    delete: (id) => { },
    update: (payload, id) => { },
    getOne: (id) => { },
    getAll: () => {
        return async (dispatch) => {
            dispatch({ type: STORY_TYPES.GET_STORY_START });
            try {
                const { data } = await client.get("/stories");
                dispatch({
                    type: STORY_TYPES.GET_STORY_SUCCESS,
                    payload: data,
                });
            } catch (e) {
                dispatch({
                    type: STORY_TYPES.GET_STORY_FAILED,
                    payload: e.response,
                });
            }
        };
    },
};

// likes request
export const likes = {
    get: (id) => { },
    post: (payload) => {
        return async (dispatch) => {
            dispatch({ type: LIKE_TYPES.CREATE_LIKE_START });
            try {
                const { data } = await client.post("/likes", payload);

                dispatch({
                    type: LIKE_TYPES.CREATE_LIKE_SUCCESS,
                    payload: data,
                });
            } catch (e) {
                dispatch({
                    type: LIKE_TYPES.CREATE_LIKE_FAILED,
                    payload: e.response,
                });
            }
        };
    },
    delete: (id) => { },
    update: (payload, id) => { },
    getOne: (id) => { },
    getAll: () => { },
};

// accessType request
export const accessType = {
    getAll: () => {
        return async (dispatch) => {
            try {
                const { data } = await client.get("/accessTypes");
                dispatch({ type: ACCESS_TYPES.GET_ACCESS_TYPES, payload: data });
            } catch (e) { }
        };
    },
};
// accessType request
export const getAsstes = {
    getAll: () => {
        return async (dispatch) => {
            dispatch({ type: STORY_TYPES.GET_ASSETS_STORY_START });
            try {
                const { data } = await client.get("/assets?category=STORIES");
                dispatch({ type: STORY_TYPES.GET_ASSETS_STORY_SUCCESS, payload: data });
            } catch (e) {
                dispatch({ type: STORY_TYPES.GET_ASSETS_STORY_FAILED });
            }
        };
    },
};
