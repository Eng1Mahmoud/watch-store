import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  login: boolean;
}

export const userSlice = createSlice({
  name: "user",
  initialState: { login: false } as UserState,
  reducers: {
    setUser: (state, action: PayloadAction<boolean>) => {
      state.login = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
