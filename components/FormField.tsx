import { FormFieldProps } from "@/types";
import React from "react";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => {
  return (
    <>
      <input
        className="mb-4 rounded-md border border-black p-2"
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
      />
      {error && <span className="text-red-800">{error.message}</span>}
    </>
  );
};

export default FormField;
