import { configureStore } from '@reduxjs/toolkit'
import tvReducers from './reducers/TvSlice'
import movieReducers from './reducers/MovieSlice'
import personsReducers from './reducers/PersonSlice'

const store = configureStore({
  reducer: {
    tv: tvReducers,
    movie: movieReducers,
    person: personsReducers
  },
});

export default store;   