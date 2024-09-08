import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dialogCropImageState {
  show: boolean;
  image: string | null;
  filedName: string;
}

const initialState: dialogCropImageState = {
  show: false,
  image: null,
  filedName: "",
};

export const ShowDialogCropImageSlice = createSlice({
  name: "dialogCropImage",
  initialState,
  reducers: {
    showDialog: (
      state,
      action: PayloadAction<{
        show: boolean;
        image: string | null;
        filedName: string | null;
      }>,
    ) => {
      state.show = action.payload.show;
      state.image = action.payload.image;
      state.filedName = action.payload.filedName as string;
    },
    closeDialogCropImage: (state) => {
      state.show = false;
      state.image = null;
      state.filedName = "";
    },
  },
});

export const { showDialog, closeDialogCropImage } =
  ShowDialogCropImageSlice.actions;
export default ShowDialogCropImageSlice.reducer;
