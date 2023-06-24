import {createSlice} from '@reduxjs/toolkit'
import { DataMovie } from '../../MainImport/AllImport'
// membuat slice (data)
const movieSlice = createSlice({
    name : "Movie Slice",
    initialState : {
        movies : DataMovie
    },
    reducers : {
        addMovies(state , action) {
            state.movies.push(action.payload)
        },
        updateMovie(state,action){
            state.movies = action.payload
        }
    }
})

//membuat action dan reducers
const {addMovies,updateMovie} = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

export {addMovies,updateMovie};
export default moviesReducer;