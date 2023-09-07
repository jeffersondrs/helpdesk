import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user-slice";
import { callReducer } from "./call-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    call: callReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
