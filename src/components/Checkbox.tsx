// src/components/Checkbox.tsx
import type { FC } from "react";
import type { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const CUCheckbox: FC<CheckboxProps> = ({ label, className, ...props }) => {
  return (
    <label className={`flex items-center space-x-2 cursor-pointer my-1 ${className ?? ""}`}>
      <input type="checkbox" {...props} className="w-4 h-4 accent-primary" />
      {label && <span className="text-text">{label}</span>}
    </label>
  );
};
