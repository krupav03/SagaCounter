import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:'counters',
    initialState: {count:0},
    reducers:{
        increment(state) {
            
            state.count += 1;
           
        },
        decrement(state) {
            state.count -= 1; 
        },
        reset(state) {
            state.count = 0
        },
        incrementByAmount (state,action) {
            console.log('state++',state,action)
            state.count += action.payload
        }
    }
})

export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;