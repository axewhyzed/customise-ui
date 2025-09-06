// src/components/Radio.tsx
import type { FC } from "react";
import type { InputHTMLAttributes } from "react";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const CURadio: FC<RadioProps> = ({ label, className, ...props }) => {
  return (
    <label className={`flex items-center space-x-2 cursor-pointer my-1 ${className ?? ""}`}>
      <input
        type="radio"
        {...props}
        className="w-4 h-4 accent-primary"
      />
      {label && <span className="text-text">{label}</span>}
    </label>
  );
};
