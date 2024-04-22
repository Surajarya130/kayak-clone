import { z } from "zod";

export interface LinkType {
  imgURL: string;
  route: string;
  label: string;
  id: number;
  hrLine?: boolean;
}

export const FormSchema = z
  .object({
    journeyType: z.enum(["one-way", "return", "multi-city"]),
    flightClass: z.enum(["economy", "business-class", "first-class"]),
    from: z.string().min(2, { message: "Not a valid city" }),
    destination: z.string().min(2, { message: "Not a valid city" }),
    startDate: z.date(),
    returnDate: z.date(),
    noOfPassengers: z
      .number()
      .int()
      .min(1, { message: "Number of passengers must be at least 1" })
      .max(10, { message: "Maximum number of passengers is 10" }),
  })
  .refine(
    (data) => {
      if (data.journeyType === "return" || data.journeyType === "multi-city") {
        return !!data.returnDate;
      }
      return true;
    },
    {
      message: "Return Date is required",
      path: ["returnDate"],
    }
  );
