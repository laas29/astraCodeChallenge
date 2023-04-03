import getKeanuPicture from "./database";

const Resolvers = {
  Query: {
    keanuPicture: async (_: any, args: any) => {
      const {
        width,
        height,
        young,
        grayScale
      } = args;
      const svgPicture = await getKeanuPicture(width, height, young, grayScale);
      return {
        width,
        height,
        young,
        grayScale,
        svgPicture,
      }
    },
  },
};
export default Resolvers;