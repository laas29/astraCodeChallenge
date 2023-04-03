import { GraphQLErrorExtensions } from "graphql/error/GraphQLError";

export interface KeanuPicture {
    width: number;
    height: number;
    young: boolean;
    grayScale: boolean;
    svgPicture: string;
};

export interface KeanuPictureRequestParams {
    width: number;
    height: number;
    young: boolean;
    grayScale: boolean;
};

export interface KeanuPictureResponse {
    keanuPicture: KeanuPicture
}

export interface KeanuPictureState {
    keanuPicture: null | KeanuPicture;
    loadingKeanuPictureRequest: boolean;
    errorLoadingKeanuPicture: null | string;
}


