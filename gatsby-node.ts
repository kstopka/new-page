import { GatsbyNode } from "gatsby";
import { CustomResource, StandardResource } from "./gatsby-custom/queries";
import { StandardPagesGenerator } from "./gatsby-custom/pages-generators";
import * as fs from "fs";
import * as path from "path";

// function addMetadata(arrOfData, siteMetaData) {
//   return arrOfData.map((el) => ({ ...el, siteMetaData }));
// }

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const siteMetadata = await CustomResource.getSiteMetadata(graphql);
  console.log(siteMetadata);
  fs.writeFileSync("siteMetadata.json", JSON.stringify(siteMetadata), "utf8");

  let pages = await (await StandardResource.getPages(graphql)).data;
  // pages = addMetadata(pages, siteMetadata);

  // StandardPagesGenerator.home(createPage, pages);
};
