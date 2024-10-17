import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  login: boolean;
  id: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: { login: false, id: "" } as UserState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.login = action.payload.login;
      state.id = action.payload.id;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
