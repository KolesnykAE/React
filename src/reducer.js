const initionalState = {
    counter: 0
}

const reducer = (state = initionalState, action) => {
    switch (action.type) {
        case 'INC_1': {
            return {
                ...state,
                counter: state.counter + 1
            };
        }
        case 'DEC_1': {
            return {
                ...state,
                counter: state.counter - 1
            };
        }
        case 'INC_100': {
            return {
                ...state,
                counter: state.counter + 100
            };
        }
        case 'DEC_100': {
            return {
                ...state,
                counter: state.counter - 100
            };
        }
        default:
            return state
    }
};
export default reducer;
