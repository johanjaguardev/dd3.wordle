import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cellsReducer } from "./cellsSlice";
// import { Cell } from "../types/Cell.t";
// import { Theme } from "../types/Theme.t";

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: {
    cells: cellsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
