import { CreatePagesArgs } from "gatsby";
import { ISiteMetadataData } from "./types";

class CustomResourceClass {
  getSiteMetadata = async (graphql: CreatePagesArgs[`graphql`]) => {
    const {
      data,
    }: {
      errors?: any;
      data?: ISiteMetadataData;
    } = await graphql(`
      query {
        wp {
          generalSettings {
            description
            language
            title
            url
          }
        }
      }
    `);

    return data?.wp.generalSettings;
  };
}

const CustomResource = new CustomResourceClass();

export default CustomResource;
