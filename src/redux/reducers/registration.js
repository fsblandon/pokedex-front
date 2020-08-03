import { trainerConstants } from "../../_constants";

export default (state = {}, action) => {
    switch (action.type) {
        case trainerConstants.REGISTER_REQUEST:
            return {
                ...state,
                isRegistered: false,
                trainer: action.payload
            };
        case trainerConstants.REGISTER_SUCCESS:
            return {
                ...state,
                isRegistered: true,
                trainer: action.payload
            };
        case trainerConstants.REGISTER_FAILURE:
            return {
                ...state,
                isRegistered: false,
                error: action.payload
            };
        default:
            return state;
    }
}