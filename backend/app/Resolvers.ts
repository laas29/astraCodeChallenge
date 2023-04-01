import getKeanu from "./database";

const Resolvers = {
  Query: {
    getKeanuPicture: async (_: any, args: any) => {
      let svgPicture = await getKeanu(args.width, args.height, args.young, args.grayScale);

      return {
        width: args.width,
        height: args.height,
        young: args.young,
        grayScale: args.grayScale,
        svgPicture,
      }
    },
  },
};
export default Resolvers;