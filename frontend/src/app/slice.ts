import {
    PayloadAction,
    createSlice,
} from "@reduxjs/toolkit";
import { KeanuPictureState, KeanuPictureResponse } from 'MainRoot/app/types';
import { GraphQLErrorExtensions } from 'graphql';

const initialState: KeanuPictureState = {
    keanuPicture: null,
    loadingKeanuPictureRequest: false,
    errorLoadingKeanuPicture: null,
};

export const keanuPictureSlice = createSlice({
    name: "keanuPicture",
    initialState,
    reducers: {
        setKeanuPicture: (state, { payload }: PayloadAction<KeanuPictureResponse>) => {
            state.keanuPicture = payload.keanuPicture;
            state.loadingKeanuPictureRequest = false;
            state.errorLoadingKeanuPicture = null;
        },
        fetchKeanuPicture: (state) => {
            state.loadingKeanuPictureRequest = true;
        },
        setErrorLoadingKeanuPicture: (state, { payload }: PayloadAction<string>) => {
            state.errorLoadingKeanuPicture = payload;
            state.loadingKeanuPictureRequest = false;
            state.keanuPicture = null;
        }
    }
});

export const { setKeanuPicture, fetchKeanuPicture, setErrorLoadingKeanuPicture } = keanuPictureSlice.actions;

export default keanuPictureSlice.reducer;