import { Actions } from "gatsby";

import * as path from "path";
import { slash } from "gatsby-core-utils";
import { IPage } from "../../../src/types/standard";

class StandardPagesGeneratorClass {
  home = (createPage: Actions["createPage"], pages: IPage[]) => {
    const homePage = path.resolve(`./src/templates/standard/home.tsx`);
    const homeData = pages.find((el) => el.slug === "home");

    // PagesGeneratorUtils.assertionOfExistingData(homeData, "home")

    createPage({
      // will be the url for the page
      path: `/`,
      // specify the component template of your choice
      component: slash(homePage),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        page: homeData,
        pages,
      },
    });
  };
}

const StandardPagesGenerator = new StandardPagesGeneratorClass();

export default StandardPagesGenerator;
