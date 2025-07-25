import { createSlice } from "@reduxjs/toolkit";
import LightTheme from "../../Themes/LightTheme";
import DarkTheme from "../../Themes/DarkTheme";

const initialState = {
  theme: LightTheme,
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme.mode === "light" ? DarkTheme : LightTheme;
    },
    setLightTheme: (state) => {
      state.theme = LightTheme;
    },
    setDarkTheme: (state) => {
      state.theme = DarkTheme;
    },
  },
});

export const { toggleTheme, setLightTheme, setDarkTheme } =
  ThemeSlice.actions;
export default ThemeSlice.reducer;
