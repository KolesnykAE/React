import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider, useSelector} from 'react-redux';

const initialState = {
    counter: 1,
    counter2: 0
}

const reducer = (state = initialState, action) => {
    console.log('called reducer', state, action);

    // if (action.type === 'INC') {
    //     return {
    //         ...state,
    //         counter: state.counter + 1
    //     };
    // }
    //
    // if (action.type === 'DEC') {
    //     return {
    //         ...state,
    //         counter: state.counter - 1
    //     };
    // }
    //
    // if (action.type === 'RESET') {
    //     return {
    //         ...state,
    //         counter: 0
    //     };
    // }
    //
    // if (action.type === 'INC_CUSTOM') {
    //     return {
    //         ...state,
    //         counter: state.counter + action.payload
    //     };
    // }
    //
    // return state;

    // через if пишут редко, чаще черещ свитч кейсы

    switch (action.type) {
        case 'INC': {
            return {
                ...state,
                counter: state.counter + 1
            };
        }

        case 'DEC': {
            return {
                ...state,
                counter: state.counter - 1
            };
        }

        case 'RESET': {
            return {
                ...state,
                counter: 0
            };
        }

        case 'INC_CUSTOM': {
            return {
                ...state,
                counter: state.counter + action.payload
            };
        }

        default:
            return state
    }

};

//1) пример работы со Store без React
// а) создаем const store = createStore(reducer)
// б) создаем reducer
// в) создаем initialState
// г) описуем action
// д) запускаем dispatch

// const store = createStore(reducer);
//
// store.subscribe(() => {
//     console.log(store.getState(), 'hello')
// });
//
// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})
// store.dispatch({type: 'DEC'})
// store.dispatch({type: 'RESET'})

//2. щоб прокинути каунтер в реакт:
// а) устанавливаем библиотеку реакт-редакс и импортируем c Provider
// б) в Provider обгортаэм APP,
// в) Provider передаем стор,
// г) переходим на App js,
// д) создаем Counter с возвратом вывод h1
// е) нам нужен механизм який зі стору видергне каунтер: const counter + хук импорт реакт редакс
// useSelector який приймає весь стейт і повертає state.counter
// є) щоб кнопки спрацювали створюємо dispatch + імпорт useDispatch,
// ж) описуємо онкліки

const store = createStore(reducer);
const rootElement = document.getElementById("root");


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
