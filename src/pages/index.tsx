import React from "react";

import { useStaticQuery, graphql } from "gatsby";

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

  const { title } = data.allWpPage.nodes.find(
    (el: { slug: string }) => el.slug === "home"
  );

  return (
    <>
      <div>{title}</div>
    </>
  );
};
export default IndexPage;
