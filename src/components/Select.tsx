// src/components/Select.tsx
import type { FC } from "react";
import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const CUSelect: FC<SelectProps> = ({ label, className, children, ...props }) => {
  return (
    <div className="flex flex-col my-2">
      {label && <label className="text-text font-medium">{label}</label>}
      <select
        {...props}
        className={`block w-full p-2 my-2 rounded-md border bg-bg text-text focus:ring-2 focus:ring-primary ${className ?? ""}`}
      >
        {children}
      </select>
    </div>
  );
};
