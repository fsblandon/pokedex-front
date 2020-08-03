  
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../views/login';

import { fetchTrainer } from "../redux/actions";


const mapStateToProps = ({trainers}) => ({
    trainers
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchTrainer
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login)