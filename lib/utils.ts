import { FormSchema } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { UseFormReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const todaysDate = () => {
  const year = new Date().getFullYear();
  const month = String(new Date().getMonth() + 1).padStart(2, "0");
  const day = String(new Date().getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const handleSeatCounter = (
  form: UseFormReturn<z.infer<typeof FormSchema>>,
  typeOfBtn: string
) => {
  const currentValue = form.getValues("noOfPassengers");
  let newValue = currentValue;

  if (typeOfBtn === "add") {
    newValue = (currentValue ?? 0) + 1;
  } else if (typeOfBtn === "minus") {
    newValue = (currentValue ?? 2) - 1;
  }

  if (newValue && newValue >= 1 && newValue <= 10) {
    form.setValue("noOfPassengers", newValue);
  }
};

export const handleRev = (form: UseFormReturn<z.infer<typeof FormSchema>>) => {
  const currentDestination = form.getValues("destination");
  const currentFrom = form.getValues("from");

  form.setValue("destination", currentFrom);
  form.setValue("from", currentDestination);
};
