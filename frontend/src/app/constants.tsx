import { gql } from "graphql-request";

const getKeanuPicture = gql`
  query ($width: Int!, $height: Int!, $young: Boolean, $grayScale: Boolean) {
    keanuPicture(width: $width, height: $height, young: $young, grayScale: $grayScale) {
      width,
      height,
      young,
      grayScale,
      svgPicture,
    }
  }
`;
export { getKeanuPicture };