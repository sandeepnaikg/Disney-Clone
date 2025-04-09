import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";
import userSlice from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
