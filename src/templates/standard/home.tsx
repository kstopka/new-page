import React from "react";
import { IPage } from "../../types/standard";

interface HomeProps {
  pageContext: {
    page: IPage;
    pages: IPage[];
  };
}

const HomePage: React.FC<HomeProps> = ({ pageContext }) => {
  const { page, pages } = pageContext;
  return (
    <>
      <div>{page.title}</div>
    </>
  );
};
export default HomePage;
