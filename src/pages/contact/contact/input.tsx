import React from "react";

interface InputProps {
  id: string;
  label: string;
  type: string; 
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="mb-4 ">
      <label htmlFor={id} className="block text-gray-700 font-medium mb-1">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type === "email" ? "text" : type} // email-ს დეფაულტ ვალიდაცია რომ გამეუქმებინა მაგიტომ დამჭირდა ეს გზა <3
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
