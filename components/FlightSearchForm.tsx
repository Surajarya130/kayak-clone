import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn, handleRev, handleSeatCounter } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "./ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import Image from "next/image";
import { FormSchema } from "@/types";

const FlightSearchForm = () => {
  const [date, setDate] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      journeyType: "one-way",
      flightClass: "economy",
      from: "",
      destination: "",
      startDate: new Date(),
      returnDate: new Date(),
      noOfPassengers: 1,
    },
  });

  const handleFormSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data, "hey suraj");
  };

  const travelType = form.watch("journeyType");

  const useDateEffect = (startDateValue: Date, setDate: (date: string) => void) => {
    useEffect(() => {
      setDate(format(startDateValue, "PPP"));
    }, [startDateValue, setDate]);
  };

  useDateEffect(form.getValues("startDate"), setDate);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div id="upperForm" className="flex space-x-3">
          <FormField
            control={form.control}
            name="journeyType"
            render={({ field }) => (
              <div className="w-[110px]">
                <Select defaultValue="one-way" onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-auto space-x-2 rounded-none border-none p-2 focus:ring-0">
                      <SelectValue defaultChecked placeholder="One-Way" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="childOfSelectContent -top-9 w-full">
                    <SelectItem
                      className="rounded-none data-[state=checked]:bg-gray data-[state=checked]:font-semibold "
                      value="one-way"
                    >
                      One-Way
                    </SelectItem>
                    <SelectItem
                      className="rounded-none data-[state=checked]:bg-gray data-[state=checked]:font-semibold"
                      value="return"
                    >
                      Return
                    </SelectItem>
                    <SelectItem
                      className="rounded-none data-[state=checked]:bg-gray data-[state=checked]:font-semibold"
                      value="multi-city"
                    >
                      Multi-City
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="noOfPassengers"
            render={({ field }) => (
              <div className="w-[110px]">
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-auto space-x-2  rounded-none border-none p-2 focus:ring-0">
                      <SelectValue
                        defaultValue="1"
                        defaultChecked
                        placeholder={`${form.getValues("noOfPassengers")} Adults`}
                      />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent className="-top-1 w-[200px] p-2 shadow-md">
                    <div className="flex items-center justify-between  space-x-3 p-2">
                      <p>
                        Adults <span>+</span>
                      </p>
                      <div className="flex space-x-3">
                        <button
                          className="flex size-5 items-center justify-center rounded-lg border 
                        disabled:bg-gray-100
                        "
                          disabled={form.getValues("noOfPassengers") === 10}
                          onClick={() => handleSeatCounter(form, "add")}
                        >
                          +
                        </button>
                        <p>{form.getValues("noOfPassengers")}</p>
                        <button
                          disabled={form.getValues("noOfPassengers") === 1}
                          className="flex size-5 items-center justify-center rounded-lg border disabled:bg-gray-100"
                          onClick={() => handleSeatCounter(form, "minus")}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </SelectContent>
                </Select>
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="flightClass"
            render={({ field }) => (
              <div className="w-[140px]">
                <Select defaultValue="economy" onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-auto space-x-2 rounded-none border-none p-2 focus:ring-0 ">
                      <SelectValue placeholder="Economy" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="childOfSelectContent -top-11">
                    <SelectItem
                      className="rounded-none data-[state=checked]:bg-gray data-[state=checked]:font-semibold"
                      value="economy"
                    >
                      Economy
                    </SelectItem>
                    <SelectItem
                      className="rounded-none data-[state=checked]:bg-gray data-[state=checked]:font-semibold"
                      value="business-class"
                    >
                      Business Class
                    </SelectItem>
                    <SelectItem
                      className="rounded-none data-[state=checked]:bg-gray data-[state=checked]:font-semibold"
                      value="first-class"
                    >
                      First Class
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          />
        </div>

        <div id="lowerSection" className="flex space-x-1">
          <FormField
            control={form.control}
            name="from"
            render={({ field }) => (
              <FormItem className="grow">
                <div className="relative w-full">
                  <Image
                    src="/assets/icons/flight.svg"
                    alt="flight-icon"
                    width={18}
                    height={18}
                    className="absolute left-4 top-4"
                  />
                  <FormControl>
                    <Input
                      className="h-[50px]  border-white-100 bg-white-100 pl-10 focus:bg-white focus-visible:border-black focus-visible:ring-transparent"
                      placeholder="From..."
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="button"
            onClick={() => handleRev(form)}
            className="h-[50px] rounded-md  bg-white-100 px-2 hover:bg-gray-100"
          >
            <Image src="/assets/icons/revArr.svg" alt="rev-arr" width={48} height={48} />
          </button>

          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem className="grow">
                <div className="relative w-full">
                  <Image
                    src="/assets/icons/flight.svg"
                    alt="flight-icon"
                    width={18}
                    height={18}
                    className="absolute left-4 top-4"
                  />
                  <FormControl>
                    <Input
                      placeholder="To..."
                      {...field}
                      className="h-[50px] border-white-100 bg-white-100 pl-10 focus:bg-white focus-visible:border-black focus-visible:ring-transparent"
                    />
                  </FormControl>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="grow">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "h-[50px] w-full border-white-100 bg-white-100 focus:bg-white focus:border-black focus-visible:ring-transparent  text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? date : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto size-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={(date) => {
                        const returnDate = form.getValues("returnDate");
                        if (date && returnDate && date > returnDate) return;
                        field.onChange(date);
                      }}
                      disabled={(date) => {
                        const today = new Date();
                        const nextYear = new Date();
                        nextYear.setFullYear(today.getFullYear() + 1);
                        return date > nextYear || date < today;
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {(travelType === "return" || travelType === "multi-city") && (
            <FormField
              control={form.control}
              name="returnDate"
              render={({ field }) => (
                <FormItem className="grow">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "h-[50px] border-white-100 bg-white-100 focus:bg-white focus:border-black focus-visible:ring-transparent w-full text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto size-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value ? new Date(field.value) : undefined}
                        onSelect={field.onChange}
                        disabled={(date) => {
                          const today = new Date();
                          const nextYear = new Date();
                          nextYear.setFullYear(today.getFullYear() + 1);

                          if (date > nextYear || date < today) return true;

                          const startDate = form.getValues("startDate");
                          if (startDate) {
                            const startDateObj = new Date(startDate);
                            return date < startDateObj;
                          }

                          return false;
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button type="submit" className="h-12 bg-orange-secondary hover:bg-orange-primary">
            <Image
              src="/assets/icons/search-icon.svg"
              width={25}
              height={25}
              alt="search-icon"
              className="invert"
            />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FlightSearchForm;
