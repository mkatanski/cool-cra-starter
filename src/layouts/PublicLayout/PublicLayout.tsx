import React from "react";
import LayoutBase, { LayoutBaseProps } from "layouts/LayoutBase";

const PublicLayout: React.FC<LayoutBaseProps> = ({
  children,
  ...rest
}: LayoutBaseProps) => {
  return (
    <>
      <LayoutBase {...rest}>{children}</LayoutBase>
    </>
  );
};

export default PublicLayout;
