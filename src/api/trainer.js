import axios from 'axios';

const baseURL = "https://localhost:5001/api";

export const getTrainers = () => {
    axios.get(baseURL + `/trainer`)
        .then((response) => response.data);
}

export const getTrainer = (email) => {
    axios.get(baseURL + `/trainer/${email}`)
        .then((response) => response.data);
}

export const setTrainer = (name, lastName, email) => {
    axios.post(
        baseURL + `/trainer`,
        {
            name: name,
            lastname: lastName,
            email: email
        }
    ).then((response) => response.data);
}