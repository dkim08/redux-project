import { createSlice } from "@reduxjs/toolkit";

type Theme = 'dark' | 'light';
interface ThemeState {
  currentTheme: Theme;
}

const savedTheme = localStorage.getItem("theme") as Theme;
const currentSavedTheme = savedTheme ?? "light";

const initialState: ThemeState = {
  currentTheme: currentSavedTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme =
        state.currentTheme === "dark" ? "light" : "dark";

      localStorage.setItem("theme", state.currentTheme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
