import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface CallState {
  id: string;
  title: string;
  status: string;
  description: string;
  priority?: string;
  userName?: string;
  createdAt: string;
  updatedAt: string;
}

interface Calls {
  calls: CallState[];
}

const initialState: Calls = {
  calls: [],
};

const callSlice = createSlice({
  name: "call",
  initialState,
  reducers: {
    setCalls: (
      state,
      action: PayloadAction<{
        title: string;
        description: string;
        userName: string;
        priority?: string;
      }>
    ) => {
      const newCall: CallState = {
        id: uuidv4(),
        title: action.payload.title,
        status: "aberto",
        userName: action.payload.userName,
        description: action.payload.description,
        priority: "baixa",
        createdAt: Date.now().toString(),
        updatedAt: Date.now().toString(),
      };
      state.calls.push(newCall);
    },
  },
});

export const { setCalls } = callSlice.actions;

export const callReducer = callSlice.reducer;
