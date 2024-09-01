import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dialogCropImageState {
  show: boolean;
  image: string | null;
}

const initialState: dialogCropImageState = {
  show: false,
  image: null,
};

export const ShowDialogCropImageSlice = createSlice({
  name: "dialogCropImage",
  initialState,
  reducers: {
    showDialog: (
      state,
      action: PayloadAction<{ show: boolean; image: string | null }>,
    ) => {
      state.show = action.payload.show;
      state.image = action.payload.image;
    },
    closeDialogCropImage: (state) => {
      state.show = false;
      state.image = null;
    },
  },
});

export const { showDialog, closeDialogCropImage } =
  ShowDialogCropImageSlice.actions;
export default ShowDialogCropImageSlice.reducer;
