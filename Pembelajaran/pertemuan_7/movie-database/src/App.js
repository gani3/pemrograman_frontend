import React, { useState } from "react";
import {
  Home,
  AddMovie,
  Populer,
  NowPlaying,
  TopRated
} from "./MainImport/RoutesImport";
import {Routes, Route } from "react-router-dom";
import BaseLayouts from "./components/BaseLayout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import Detail from "./pages/movie/Detail";
import { DataMovie } from "./MainImport/AllImport";

function App() {
  const [film,setFilm] = useState(DataMovie);
  return (
    <ThemeProvider theme={theme}>
      <BaseLayouts>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/AddMovie" element={<AddMovie film={film} setFilm={setFilm}/>} />
          <Route path="/movie/Populer" element={<Populer/>} />
          <Route path="/movie/NowPlaying" element={<NowPlaying/>} />
          <Route path="/movie/TopRated" element={<TopRated/>} />
          <Route path="/movie/:movieId" element={<Detail/>} />
        </Routes>
      </BaseLayouts>
    </ThemeProvider>
  );
}

export default App;
