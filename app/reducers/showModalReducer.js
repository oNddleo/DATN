let initialState = {
    index: null
}
var showModal = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL': {
            return {...state, index: action.index};
        }
        default:
            return state;
    }
}
module.exports = showModal;