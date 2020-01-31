import React from "react";
import ReactDom from 'react-dom';
import {createStore, combineReducers} from 'redux';
import './index.scss';


class App extends React.Component {
  render() {
    console.clear();

    // People who want to join our agency
    const createPolicy = (name, amount) => {
        return {
          type: 'CREATE_POLICY',
          payload: {
            name: name,
            amount: amount
          }
        }
    };

    // People who want to unregister from our agency
    const deletePolicy = (name) => {
      return {
        type: 'DELETE_POLICY',
        payload: {
          name: name
        }
      }
    };

    // People who want to claim some money from agency
    const createClaim = (name, amount) => {
      return {
        type: 'CREATE_CLAIM',
        payload: {
          name: name,
          amount: amount
        }
      }
    };

    // Claims history reducer
    const claimHistory = (oldListOfClaims = [], action) => {
      if (action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload]
      }

      return oldListOfClaims;
    };

    // Acounting reducer
    const accounting = (bagOfMoney = 100, action) => {
      if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amount;
      } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
      }

      return bagOfMoney;
    };

    // Policy reducer
    const policy = (listOfPolicies = [], action) => {
      if(action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
      } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name);
      }

      return listOfPolicies;
    };

    // wrapping all our reducer togather with combine reducer function into local reference
    const departments = combineReducers({
      accounting: accounting,
      policy: policy,
      claimHistory: claimHistory
    });

    // storing our results from create store function into local reference
    const store = createStore(departments);

    // invoking or initiating our store
    // eslint-disable-next-line no-unused-expressions
    store;

    // configuring our store with dispatch which need one action to be passed
    store.dispatch(createPolicy('steva', 20));
    store.dispatch(createPolicy('nena', 20));
    store.dispatch(deletePolicy('steva'));
    store.dispatch(createClaim('nena', 20));

    console.log(store.getState());

    return(
      <div>This is root</div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'));