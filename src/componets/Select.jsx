import React from "react";
import { useId } from "react";
const Select = React.forwardRef(
  ({ options, label, className,defaultValue="hi", ...props }, ref) => {
    const [id] = useId(); // Generating a unique ID for the select element
    return (
      <div className="w-full mb-4">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <select
          defaultValue={defaultValue}
          {...props}
          id={id}
          ref={ref}
          className={`px-3 py-2 rounded-lg  text-black outline-none  focus:border-indigo-500 duration-200 w-full ${className}`}
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
