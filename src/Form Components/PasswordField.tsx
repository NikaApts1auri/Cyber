import  { useState } from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

type PasswordFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>; 
  register: UseFormRegister<T>; 
  error?: string;
  showSignUpLink?: boolean;
};

const PasswordField = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  showSignUpLink,
}: PasswordFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          type={showPassword ? "text" : "password"}
          className={`block w-full rounded-md border ${
            error ? "border-red-500" : "border-gray-300"
          } px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
          {...register(name)}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      {showSignUpLink && (
        <div className="mt-2 text-sm flex justify-between gap-[5rem] text-gray-500">
          Don't have an account? <a href="/registration" className="text-[blue]">Sign up</a>.
        </div>
      )}
    </div>
  );
};

export default PasswordField;
