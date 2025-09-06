// src/components/Input.tsx
import type { FC } from "react";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const CUInput: FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col my-2">
      {label && <label className="text-text font-medium">{label}</label>}
      <input
        {...props}
        className={`px-3 py-2 border border-gray-300 rounded bg-bg text-text focus:outline-none focus:ring-2 focus:ring-primary ${className ?? ""}`}
      />
    </div>
  );
};
