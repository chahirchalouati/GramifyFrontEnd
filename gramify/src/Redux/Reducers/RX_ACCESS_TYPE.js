import { ACCESS_TYPES } from "../Types";

const initialState = {
    accessTypes: [],

};

const RX_ACCESS_TYPE = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACCESS_TYPES.GET_ACCESS_TYPES:
            return {
                ...state,
                accessTypes: payload,
            };


        default:
            return state;
}
};
export default RX_ACCESS_TYPE