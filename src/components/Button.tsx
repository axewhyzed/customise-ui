// src/components/Button.tsx
import type { FC } from "react";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const CUButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="m-1 px-4 py-2 rounded-md font-medium bg-primary text-text hover:opacity-90 transition-colors duration-200"
    >
      {children}
    </button>
  );
};