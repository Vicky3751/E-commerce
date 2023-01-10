const initialState = {
    isLoading: false,
}

const spinnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING_STATE': return { isLoading: action?.payload };
        default: return state;
    }
}

export default spinnerReducer;