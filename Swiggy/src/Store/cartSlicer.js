import {createSlice} from '@reduxjs/toolkit';

const cart = createSlice({
    name: 'cartSlice',
    initialState: {
        items: [],
        count: 0,
    },
    reducers:{
        addItem: (state, action)=>{
            state.items.push({...action.payload, quantity:1});
            state.count++;
        },
        IncrementItem: (state, action)=>{
            const ele = state.items.find(item=> item.id===action.payload.id);
            ele.quantity+=1;
            state.count+=1;
        },
        DecrementItem: (state, action)=>{
            const ele = state.items.find(item=> item.id===action.payload.id);
            if(ele.quantity > 1){
                ele.quantity -= 1;
            }
            else{
                state.items = state.items.filter(item=> item.id != action.payload.id);
            }

            state.count--;
        }
    }
})

export const {addItem, IncrementItem, DecrementItem} = cart.actions;
export default cart.reducer;