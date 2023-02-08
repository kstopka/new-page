import { CreatePagesArgs } from "gatsby";
import { IAllWpPage } from "./types";

class StandardResourceClass {
  getPages = async (graphql: CreatePagesArgs[`graphql`]) => {
    const {
      data,
    }: {
      errors?: any;
      data?: IAllWpPage;
    } = await graphql(`
      {
        allWpPage {
          nodes {
            slug
            title
          }
        }
      }
    `);

    return data?.allWpPage.nodes;
  };
}

const StandardResource = new StandardResourceClass();

export default StandardResource;
