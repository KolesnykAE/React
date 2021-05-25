const initionalState = {
    counter: 0
}

const reducer = (state = initionalState, action) => {
    switch (action.type) {
        // case 'INC_1': {  исправили на
        case 'INC': {
            return {
                ...state,
                // counter: state.counter + 1 - исправили на
                counter: state.counter + action.payload
            };
        }
        // case 'DEC_1': {   - исправили на
        case 'DEC': {
            return {
                ...state,
                // counter: state.counter - 1    исправили на
                counter: state.counter - action.payload
            };
        }
        case 'INC_100': {

            return {
                ...state,
                // counter: state.counter + 100
                counter: state.counter - action.payload
            };
        }
        case 'DEC_100': {
            return {
                ...state,
                // counter: state.counter - 100
                counter: state.counter - action.payload
            };
        }
        default:
            return state
    }
};
export default reducer;
