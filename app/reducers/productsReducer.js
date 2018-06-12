let initialState = [
    {
        id: 1,
        name: "Redux",
        price: 100000
    },
    {
        id: 2,
        name: "React",
        price: 0
    },
    {
        id: 3,
        name: "Redux DevTools",
        price: 10
    }
];
var products = (state = initialState, action) => {
    return state;
};
module.exports = products;