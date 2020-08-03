  
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {registerTrainer} from '../redux/actions';

import Register from '../views/register';

const mapStateToProps = ({trainer}) => {
    return { trainer };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    registerTrainer
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register)