import { CreatePagesArgs } from "gatsby";

class CustomResourceClass {
  getSiteMetadata = async (graphql: CreatePagesArgs[`graphql`]) => {
    const { data } = await graphql(`
      query {
        wp {
          generalSettings {
            description
            language
            title
            url
          }
          seo {
            social {
              facebook {
                url
              }
            }
          }
        }
      }
    `);

    return data;
  };
}

const CustomResource = new CustomResourceClass();

export default CustomResource;
