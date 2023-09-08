import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface UserState {
  id?: string;
  name: string;
  role?: "admin" | "user";
  assignedCalls: string[];
}

const initialState: UserState = {
  name: "",
  role: "user",
  assignedCalls: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName(
      state,
      action: PayloadAction<{ name: string; role?: "admin" | "user" }>
    ) {
      state.id = uuidv4();
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.assignedCalls = [];
    },

    assignCall(state, action: PayloadAction<{ callId: string }>) {
      if (state.assignedCalls) {
        if (!state.assignedCalls.includes(action.payload.callId)) {
          state.assignedCalls.push(action.payload.callId);
        }
      }
    },
  },
});

export const { setName, assignCall } = userSlice.actions;

export const userReducer = userSlice.reducer;
