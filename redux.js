const redux=require('redux');

const reducer1 = (oldvalue = { counter : 8 }, action) => {
    if (action.type == 'increment'){
        return {
            counter : oldvalue.counter + action.payload
        }
    }
    
    if (action.type == 'decrement') {
        return {
            counter : oldvalue.counter - action.payload
        }
    }
}
const store = redux.createStore(reducer1);

store.subscribe(() => {
    const lateststate = store.getState();
    console.log(lateststate);
})

store.dispatch({type : 'increment', payload : 5})
store.dispatch({ type : 'decrement', payload : 2})