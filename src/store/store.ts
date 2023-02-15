import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cellsReducer } from "./cellsSlice";
import { gridReducer } from "./gridSlice";
// import { Cell } from "../types/Cell.t";
// import { Theme } from "../types/Theme.t";

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: {
    cells: cellsReducer,
    grid: gridReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
