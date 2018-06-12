let initialState = []
export default function cart(state = initialState, action){
    switch (action.type) {
        case 'ADD': return [...state, action.item];
        case 'REMOVE': return state.filter(i => i.id !== action.item.id);
        default:
            return state;
    }
}