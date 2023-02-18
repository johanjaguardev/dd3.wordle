import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cellsReducer } from "./cellsSlice";
import { gridReducer } from "./gridSlice";
import { themeReducer } from "./themeSlice";
import { windowReducer } from "./windowsSlice";

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: {
    cells: cellsReducer,
    grid: gridReducer,
    theme: themeReducer,
    window: windowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
