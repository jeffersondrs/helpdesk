import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface CallState {
  id: string;
  title: string;
  status: "aberto" | "pendente" | "fechado";
  description: string;
  priority?: "baixa" | "média" | "alta" | "urgente";
  userName?: string;
  createdAt: string;
  updatedAt: string;
  assignee?: string;
  assignmentDate?: string;
  completionDate?: string;
  comments?: string[];
  category?: string;
  resolutionStatus?: "resolvido" | "não resolvido" | "em andamento";
}

export interface CallUpdate {
  timestamp: string;
  updater: string;
  updateText: string;
}

interface Calls {
  calls: CallState[];
}

const initialState: Calls = {
  calls: [],
};

export const startCallHandling = createAction<{
  callId: string;
  assignee: string;
}>("calls/startCallHandling");

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
        priority?: "baixa" | "média" | "alta" | "urgente";
        status: "aberto" | "pendente" | "fechado";
      }>
    ) => {
      const newCall: CallState = {
        id: uuidv4(),
        title: action.payload.title,
        status: action.payload.status,
        userName: action.payload.userName,
        description: action.payload.description,
        priority: action.payload.priority,
        createdAt: Date.now().toString(),
        updatedAt: Date.now().toString(),
      };
      state.calls.push(newCall);
    },

    updateCall: (
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        description: string;
        userName: string;
        priority?: "baixa" | "média" | "alta" | "urgente";
        status: "aberto" | "pendente" | "fechado";
      }>
    ) => {
      const call = state.calls.find((call) => call.id === action.payload.id);
      if (call) {
        call.title = action.payload.title;
        call.description = action.payload.description;
        call.userName = action.payload.userName;
        call.priority = action.payload.priority;
        call.status = action.payload.status;
        call.updatedAt = Date.now().toString();
      }
    },

    deleteCall: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.calls.findIndex(
        (call) => call.id === action.payload.id
      );
      if (index !== -1) {
        state.calls.splice(index, 1);
      }
    },
    startCallHandlingCall: (
      state,
      action: PayloadAction<{
        id: string;
        updatedAt: string;
        status: "aberto" | "pendente" | "fechado";
        assignee: string | undefined;
        assignmentDate: string;
        resolutionStatus: "resolvido" | "não resolvido" | "em andamento";
      }>
    ) => {
      const call = state.calls.find((call) => call.id === action.payload.id);
      if (call) {
        call.updatedAt = action.payload.updatedAt;
        call.status = action.payload.status;
        call.assignee = action.payload.assignee;
        call.assignmentDate = action.payload.assignmentDate;
        call.resolutionStatus = action.payload.resolutionStatus;
      }
    },

    setResolutionStatus: (
      state,
      action: PayloadAction<{
        id: string;
        updatedAt: string;
        status: "aberto" | "pendente" | "fechado";
        resolutionStatus: "resolvido" | "não resolvido" | "em andamento";
      }>
    ) => {
      const call = state.calls.find((call) => call.id === action.payload.id);
      if (call) {
        call.updatedAt = action.payload.updatedAt;
        call.resolutionStatus = action.payload.resolutionStatus;
        call.status = action.payload.status;
      }
    },
  },
});

export const { setCalls, deleteCall, updateCall, startCallHandlingCall, setResolutionStatus } =
  callSlice.actions;

export const callReducer = callSlice.reducer;
