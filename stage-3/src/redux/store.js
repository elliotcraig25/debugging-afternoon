import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';

const store = createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));
export default store

// import {createStore} from 'redux'
// import reducer from './reducer'

// const store = createStore(reducer)
// export default store