import React from "react";

interface ICustomHeadingProps extends React.HTMLAttributes<HTMLElement> {
  as: React.ElementType;
  children?: React.ReactNode;
}

const CustomHeading: React.FC<ICustomHeadingProps> = ({
  as: HeadingElement = "h1",
  children,
  ...rest
}: ICustomHeadingProps) => {
  return <HeadingElement {...rest}>{children}</HeadingElement>;
};

export default CustomHeading;
