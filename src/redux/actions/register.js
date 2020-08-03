import { trainerConstants } from '../../_constants';

import { setTrainer } from '../../api/trainer';

//import { history } from '../../_helpers/history';


export const registerRequest = (trainer) => ({
    type: trainerConstants.REGISTER_REQUEST,
    payload: trainer
});

export const registerSuccess = (trainer) => ({
    type: trainerConstants.REGISTER_SUCCESS,
    payload: trainer
});

export const registerFailure = (error) => ({
    type: trainerConstants.REGISTER_FAILURE,
    payload: error
});

export const registerTrainer = (trainer) => (dispatch) => {
    dispatch(registerRequest(trainer));
    setTrainer(trainer.name, trainer.lastName, trainer.email)
        .then((response) => {
            if (response == trainer) {
                dispatch(registerSuccess(response));
                //history.push('/home');
            } else {
                //history.push('/register');
            }
            
        })
        .catch((err) => dispatch(registerFailure(err)))
}
