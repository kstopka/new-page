import { CreatePagesArgs } from "gatsby";

class StandardResourceClass {
  getPages = async (graphql: CreatePagesArgs[`graphql`]) =>
    await graphql(`
      {
        allWpPage {
          nodes {
            slug
            title
          }
        }
      }
    `);
}

const StandardResource = new StandardResourceClass();

export default StandardResource;
