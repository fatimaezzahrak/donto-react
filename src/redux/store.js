import { configureStore } from "@reduxjs/toolkit";
import treatSystem from "./treatSystem";

const store = configureStore({
  reducer: {
    treatSystem,
  },
});

export default store;
