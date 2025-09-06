// src/components/Text.tsx
import type { FC } from "react";
import type { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "light" | "normal" | "medium" | "bold";
}

export const CUText: FC<TextProps> = ({
  children,
  size = "md",
  weight = "normal",
  className,
  ...props
}) => {
  const sizeMap = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const weightMap = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  };

  return (
    <p
      {...props}
      className={`my-1 ${sizeMap[size]} ${weightMap[weight]} text-text ${className ?? ""}`}
    >
      {children}
    </p>
  );
};
