// src/components/Box.tsx
import type { FC } from "react";
import type { HTMLAttributes } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CUBox: FC<BoxProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`p-0 m-0 ${className ?? ""}`}>
      {children}
    </div>
  );
};
