import React from 'react';

import { Link } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            submitted: false
        };
    }

    render() {
        return (
            <div className="container-fluid background">
                <h1 className="padding">Bienvenidos a tu Pokedex</h1>
                <div>

                </div>

            </div>
          );
    }
}

export default Login