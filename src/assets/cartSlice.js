import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[],
        itemIndexList: []
    },
    reducers: {
        addItem: (state, action)=>{
            //mutating states here
            if(state.itemIndexList.indexOf(action.payload.card.info.id) > -1) {
                state.items = state.items.map((item)=> {
                    console.log(item.card.info.id === action.payload.card.info.id, item.card.info.id , action.payload.card.info.id)
                    if(item.card.info.id === action.payload.card.info.id) {
                        item.count = item.count ? item.count + 1 : 2;
                    }
                    return item;
                });
            } else {
                state.items.push(action.payload);
                state.itemIndexList.push(action.payload.card.info.id);
            }
            
        },
        removeItem: (state, action)=> {
            const itemToremove = state.items.findIndex(item=> item.card.info.id === action?.payload);
            if(state.items[itemToremove].count > 1) {
                state.items[itemToremove].count -= 1;
            } else {
                state.items.splice(itemToremove, 1)
            }
            
            console.log(current(state?.items));
            // state.items.pop();
        },
        clearCart: (state, action)=> {
            state.items.length = 0;
        }
    }
});
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;