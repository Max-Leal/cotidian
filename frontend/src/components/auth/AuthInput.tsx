import type { ReactNode } from "react";

interface IAuthInput {
  label: string;
  type: string;
  placeholder: string;
  icon: ReactNode;
  id?: string;
}

export const AuthInput = ({
  label,
  type,
  placeholder,
  id,
  icon,
}: IAuthInput) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-text/70 font-bold mb-1" htmlFor={id || type}>
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text/40">
          {icon}
        </div>

        <input
          className="border border-text/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none px-3 py-2 w-full rounded-lg pl-10"
          id={id || type}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
