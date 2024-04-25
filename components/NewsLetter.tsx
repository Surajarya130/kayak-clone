import Image from "next/image";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Must be at least 2 characters.",
  }),
});

const NewsLetter = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <section className="mt-[60px] flex w-full items-center rounded-md border p-6 shadow-sm max-md:flex-col">
      <div>
        <Image
          src="/assets/images/globe.svg"
          alt="globe"
          width={200}
          height={0}
          style={{ height: "140px", width: "200px" }}
        />
      </div>

      <div className="w-full max-md:mt-4">
        <Form {...form}>
          <div className="max-md:text-center">
            <h3 className="bodyHeading">Receive our newsletter.</h3>
            <p className="bodySm my-2 mt-2.5">
              Sign up for email updates with travel recommendations and Private Deals.
            </p>
          </div>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center space-x-3 max-md:items-start max-md:justify-center max-sm:flex-col max-sm:space-x-0"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <div className="relative flex w-3/6 flex-col max-md:items-center max-md:justify-center max-sm:w-full">
                  <FormItem className="max-sm:w-full">
                    <Image
                      src="/assets/icons/mail.svg"
                      alt="flight-icon"
                      width={18}
                      height={18}
                      className="absolute left-4 top-2.5 fill-slate-500 "
                    />
                    <FormControl>
                      <Input
                        className="!mt-0 border-black bg-white pl-10 focus-visible:ring-0 max-sm:!w-full"
                        placeholder="Enter your email address"
                        {...field}
                      ></Input>
                    </FormControl>
                  </FormItem>
                  <FormMessage />
                </div>
              )}
            />

            <Button
              variant="outline"
              className="bodySm border-black !font-semibold disabled:border-none disabled:bg-gray-200 max-sm:mt-2 max-sm:w-full"
              type="submit"
              disabled={form.getValues("username").length === 0}
            >
              Let&apos;s Do This
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default NewsLetter;
