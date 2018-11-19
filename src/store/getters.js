export default {
    //check the state count is even or odd with 'evenOrOdd' getter.
    count: function(state) {
        return state.count
    },
    evenOrOdd: function(state) {
        if(state.count % 2 === 0) {
            return state.evenOrOdd = 'even'
        } else {
            return state.evenOrOdd = 'odd';
        }
    }
}