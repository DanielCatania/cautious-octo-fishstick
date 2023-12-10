import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: string;
  backgroundColor?: string;
  border?: string;
  radius?: string;
  style?: React.CSSProperties;
}

export default function Button({
  color = "black",
  backgroundColor = "transparent",
  border = "none",
  radius = "10px",
  style,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      style={{
        color,
        backgroundColor,
        border,
        borderRadius: radius,
        cursor: "pointer",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
