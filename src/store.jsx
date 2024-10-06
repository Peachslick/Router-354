// store.jsx   เพื่อจัดการ store ของ Redux เหมือนมีร้านค้า 1 ร้าน
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice';

const store = configureStore({
  reducer: {
    products: productReducer, // Reducer มากับข้อมูลชุดนั้น
  },
});

export default store;
