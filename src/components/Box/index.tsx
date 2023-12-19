import React from "react";

interface BoxProps {
  children?: React.ReactNode;
  tag?: "div" | "section" | "main";
  style?: React.CSSProperties;
}

export default function Box({ children, tag, style }: BoxProps) {
  const Tag = tag || "div";

  return <Tag style={{ ...style, display: "flex" }}>{children}</Tag>;
}
