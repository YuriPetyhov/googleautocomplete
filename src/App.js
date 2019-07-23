import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import Form from './components/Form';


const Reducers =  combineReducers({
  form: formReducer
})

const store = createStore(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
 
class App extends Component {

  render() {
    return (
       <Provider store={store}>
         <Form />
      </Provider>
    );
  }
}


export default App;
