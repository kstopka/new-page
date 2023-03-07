import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage {
        nodes {
          id
          slug
          title
        }
      }
    }
  `);

  console.log(data);

  const { title } = data.allWpPage.nodes.find(
    (el: { slug: string }) => el.slug === "terminy-przejazdow"
  );

  return (
    <Layout>
      <div>{title} - static</div>
    </Layout>
  );
};
export default IndexPage;
