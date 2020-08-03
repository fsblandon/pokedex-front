import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import configureStore from "./redux/store/store";

//views
import register from '../src/containers/register';
import login from '../src/containers/login';

import Home from '../src/views/home';
import Detail from '../src/views/detail';



function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" component={login}></Route>
      <Route exact path="/register" component={register}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/pokemon/:id" component={Detail}></Route>
    </React.Fragment>
  );
}

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router >
        <Routes/>
      </Router>
    </Provider>
  );
}

export default App;
