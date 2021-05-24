const initionalState = {
    counter: 0
}

const reducer = (state = initionalState, action) => {
    switch (action.type) {
        case 'INC': {
            return {
                ...state,
                counter: state.counter + action.payload
            };
        }
        case 'DEC': {
            return {
                ...state,
                counter: state.counter - action.payload
            };
        }

        default:
            return state
    }
};
export default reducer;
