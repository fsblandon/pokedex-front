import { trainerConstants } from "../../_constants";

const trainer = {
    name: '',
    lastName: '',
    email: ''
}

const initialState = trainer ? {isLogin: false, trainer} : {};

export default (state = initialState, action) => {
    switch (action.type) {
        case trainerConstants.LOGIN_REQUEST:
            return {
                ...state,
                isLogin: false,
                trainer: action.payload
            };
        case trainerConstants.LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                trainer: action.payload
            };
        case trainerConstants.LOGIN_FAILURE:
            return {
                ...state,
                isLogin: false,
                error: action.payload
            };
        default:
            return state;
    }
}