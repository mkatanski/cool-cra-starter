import React from "react";
import LayoutBase, { LayoutBaseProps } from "layouts/LayoutBase";

const {{pascalCase name}}: React.FC<LayoutBaseProps> = ({
  children,
  ...rest
}: LayoutBaseProps) => {
  return (
    <div>
      <LayoutBase {...rest}>{children}</LayoutBase>
    </div>
  );
};

export default {{pascalCase name}};
