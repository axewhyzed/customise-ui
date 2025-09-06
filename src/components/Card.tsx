// src/components/Card.tsx
import type { FC } from "react";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CUCard: FC<CardProps> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className="p-4 my-2 rounded-lg shadow-md bg-bg text-text border border-gray-200 transition-colors duration-200"
    >
      {children}
    </div>
  );
};