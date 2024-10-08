import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (i) => i.card.info.id === item.card.info.id
      );

      if (existingItem) {
        existingItem.count += 1; // Increment count if item already exists
      } else {
        state.items.push({ ...item, count: 1 }); // Add new item with count 1
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload.id;
      
      const existingItem = state.items.find(
        (item) => item.card.info.id === itemId
      );
      

      if (existingItem) {
        if (existingItem.count > 1) {
          existingItem.count -= 1; // Decrement count if more than 1
        } else {
          // state.items = state.items.filter(
          //   (item) => item.card.info.id !== itemId
          // ); // Remove item if count is 1


          
        }
      }
    },

    removeEntireItem: (state, action) => {
      // Filter out the item with the given id
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload.id
      );
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, removeEntireItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
