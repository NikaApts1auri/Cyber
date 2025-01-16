import React from "react";
import { UseFormRegister } from "react-hook-form";

interface PasswordFieldProps {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>; 
  name: string;
  error?: string;
  showSignUpLink?: boolean;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  register,
  name,
  error,
  showSignUpLink,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        type="password"
        className="input"
        {...register(name)}  
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
      {showSignUpLink && (
        <a href="/registration" className="text-blue-500 text-sm">
          Sign Up
        </a>
      )}
    </div>
  );
};

export default PasswordField;