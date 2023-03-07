import React from "react";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }): JSX.Element => {
  return (
    <div>
      Header
      <main>{children}</main>
      footer
    </div>
  );
};

export default Layout;
