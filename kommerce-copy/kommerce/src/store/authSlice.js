import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  isAuthenticated: false,
  role: "user",
};

const authSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.role = action.payload;
      console.log("LOGGED IN", state.isAuthenticated, state.role);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.role = "user";
      console.log("LOGGED OUT", state.isAuthenticated);
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
