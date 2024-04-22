import React from "react";
import {
  // Controller,
  useForm,
} from "react-hook-form";
import FormField from "./FormField";
import { Button } from "./ui/button";
import { FlightSchema, FormData } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

const TestFormTwo = () => {
  const {
    register,
    // control,
    handleSubmit,
    formState: { errors },
    // setError,
  } = useForm<FormData>({
    resolver: zodResolver(FlightSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Success", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-auto grid">
          <h1 className="mb-4 text-3xl font-bold">Zod & React-Hook-Form</h1>

          <FormField
            type="text"
            name="journeyType"
            placeholder="ChooseType"
            register={register}
            error={errors.journeyType}
          />

          <FormField
            type="number"
            name="noOfPassengers"
            placeholder="No of pessengers"
            register={register}
            error={errors.noOfPassengers}
          />

          <FormField
            type="text"
            name="flightClass"
            placeholder="Flight Class"
            register={register}
            error={errors.flightClass}
          />

          <FormField
            type="text"
            name="from"
            placeholder="From"
            register={register}
            error={errors.from}
          />

          <FormField
            type="text"
            name="destination"
            placeholder="To..."
            register={register}
            error={errors.destination}
          />

          <FormField
            type="text"
            name="date"
            placeholder="choose date"
            register={register}
            error={errors.date}
          />

          <Button type="submit" variant="outline" className="mt-10">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default TestFormTwo;
