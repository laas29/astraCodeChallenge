import { gql } from "apollo-server-express";
const Schema = gql`
  type KeanuPicture {
    width: Int,
    height: Int,
    young: Boolean,
    grayScale: Boolean,
    svgPicture: String
  }
  #handle user commands
  type Query {
    getKeanuPicture(width: Int, height: Int, young: Boolean, grayScale: Boolean): KeanuPicture
  }
`;
export default Schema;
