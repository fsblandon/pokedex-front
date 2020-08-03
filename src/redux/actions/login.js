import { trainerConstants } from '../../_constants';

import { getTrainer } from '../../api/trainer';

//import { history } from '../../_helpers/history';


export const loginRequest = (email) => ({
    type: trainerConstants.LOGIN_REQUEST,
    payload: email
});

export const loginSuccess = (trainer) => ({
    type: trainerConstants.LOGIN_SUCCESS,
    payload: trainer
});

export const loginFailure = (error) => ({
    type: trainerConstants.LOGIN_FAILURE,
    payload: error
});

export const fetchTrainer = (email) => (dispatch) => {
    dispatch(loginRequest(email));
    //api
    getTrainer(email)
        .then((response) => {
            if (response.email == email) {
                dispatch(loginSuccess(response));
                //history.push('/home');
            } else {
                //history.push('/')
            }
        })
        .catch((err) => dispatch(loginFailure(err)))
}


