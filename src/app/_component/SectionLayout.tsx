import React from "react";

type Props = {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
};
export default function SectionLayout({ children, ref }: Props) {
  return <section style={{ padding: "5rem 10rem" }}>{children}</section>;
}
