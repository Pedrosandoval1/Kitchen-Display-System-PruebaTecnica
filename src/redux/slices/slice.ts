import { createSlice } from '@reduxjs/toolkit';
import { OrderState } from '../../interfaces/Index';
import { data } from '../../assets';

const initialState: OrderState = {
  status: 'new order',
  data,
  openModalRegister: false
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    handleModal: (state: OrderState, action) => {
      state.openModalRegister = action.payload;
    },
    insertOrder: (state, action) => {
      if (data.includes(action.payload.name)) {
        return;
      }
      state.data = [
        ...state.data,
        action.payload
      ]
    },
    updateOrder: (state, action) => {
      state.data = [
        action.payload,
        ...state.data.filter(item => item.id !== action.payload.id)
      ]
    },
    DeleteOrder: (state, action) => {

      state.data = [
        action.payload,
        ...state.data.filter(item => item.id !== action.payload.id)
      ]
    },
  },
});

export const { updateOrder, handleModal, insertOrder, DeleteOrder } = orderSlice.actions;
export default orderSlice.reducer;