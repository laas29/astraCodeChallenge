import { call, takeEvery, put } from "redux-saga/effects";
import { request } from "graphql-request";
import { setKeanuPicture, fetchKeanuPicture, setErrorLoadingKeanuPicture } from 'MainRoot/app/slice';
import { getKeanuPicture } from 'MainRoot/app/constants'
import { PayloadAction } from "@reduxjs/toolkit";
import { KeanuPicture, KeanuPictureRequestParams, KeanuPictureResponse } from 'MainRoot/app/types';

let callAPI = async (data: KeanuPictureRequestParams): Promise<KeanuPicture | null> => {
    return await await request(
        "http://localhost:4000/graphql",
        getKeanuPicture,
        { ...data }
    );
};

export function* featchKeanuPictureSaga({ payload }: PayloadAction<KeanuPictureRequestParams>) {
    try {
        let result: KeanuPictureResponse = yield call(() =>
            callAPI(payload)
        );
        yield put(setKeanuPicture(result));
    } catch (e: unknown) {
        if (e.response?.errors[0]) {
            const { extensions, message } = e.response?.errors[0];
            yield put(setErrorLoadingKeanuPicture(extensions.code + ': ' + message));
        } else if (e?.message) {
            yield put(setErrorLoadingKeanuPicture(e?.message));
        }
        else {
            yield put(setErrorLoadingKeanuPicture('Unknown error'));
        }
    }
}

export default function* rootSaga() {
    yield takeEvery(fetchKeanuPicture.type, featchKeanuPictureSaga);
}
