import React from "react";
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayouts>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/AddMovie" element={<AddMovie/>} />
          <Route path="/movie/Populer" element={<Populer/>} />
          <Route path="/movie/NowPlaying" element={<NowPlaying/>} />
          <Route path="/movie/TopRated" element={<TopRated/>} />
        </Routes>
      </BaseLayouts>
    </ThemeProvider>
  );
}

export default App;
