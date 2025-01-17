/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Input } from "../ui/input"; 
import { UseFormRegisterReturn } from "react-hook-form";
import { Label } from "./Label";

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  register: UseFormRegisterReturn<any>;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, placeholder, error, register }) => {
  return (
    <div className="mb-4">
      <Label label={label} />
      <div
        className={`flex items-center rounded-md border ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <Input
          {...register}  // `register` already includes ref and other handlers
          type={type}
          placeholder={placeholder}
          className="flex-1 border-none py-6 outline-none focus:border-transparent focus:outline-none focus:ring-0 focus-visible:outline-none sm:p-3"
        />
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default FormInput;
